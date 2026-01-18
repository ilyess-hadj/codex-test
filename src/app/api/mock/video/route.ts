import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };
  const url = `https://example.com/mock-video/${encodeURIComponent(prompt ?? 'video')}`;
  return NextResponse.json({ url });
}
