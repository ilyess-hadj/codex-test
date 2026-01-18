import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generationQueue } from '@/lib/queues';
import type { AssetType } from '@prisma/client';

export async function POST(request: Request) {
  const body = await request.json();
  const { prompt, type, userId, projectId } = body as {
    prompt?: string;
    type?: AssetType;
    userId?: string;
    projectId?: string;
  };

  if (!prompt || !type || !userId) {
    return NextResponse.json({ error: 'prompt, type, and userId are required.' }, { status: 400 });
  }

  const job = await prisma.job.create({
    data: {
      prompt,
      type,
      userId,
      projectId,
    },
  });

  await generationQueue.add('generate', {
    jobId: job.id,
    prompt,
    type,
  });

  return NextResponse.json(job, { status: 201 });
}
