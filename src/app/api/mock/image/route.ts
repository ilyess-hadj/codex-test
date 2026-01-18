import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };
  const url = `https://placehold.co/1024x768?text=${encodeURIComponent(prompt ?? 'image')}`;
  return NextResponse.json({ url });
}
