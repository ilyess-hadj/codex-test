import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };
  const content = `Mock text output for: ${prompt ?? 'no prompt'}`;
  return NextResponse.json({ content });
}
