import { Worker } from 'bullmq';
import { prisma } from './src/lib/prisma.js';
import { redis } from './src/lib/redis.js';
import { runMockProvider } from './src/lib/providers.js';
import type { AssetType } from '@prisma/client';

const worker = new Worker(
  'generation',
  async (job) => {
    const { jobId, prompt, type } = job.data as {
      jobId: string;
      prompt: string;
      type: AssetType;
    };

    await prisma.job.update({
      where: { id: jobId },
      data: { status: 'RUNNING' },
    });

    const result = await runMockProvider(type, prompt);

    const updated = await prisma.job.update({
      where: { id: jobId },
      data: { status: 'SUCCEEDED', result },
    });

    if (updated.projectId) {
      await prisma.asset.create({
        data: {
          type,
          content: result,
          projectId: updated.projectId,
        },
      });
    }

    return { result };
  },
  { connection: redis }
);

worker.on('failed', async (job, error) => {
  if (!job) {
    return;
  }
  await prisma.job.update({
    where: { id: job.data.jobId },
    data: { status: 'FAILED', result: error.message },
  });
});

console.log('DreamHub worker running');
