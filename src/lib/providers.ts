import type { AssetType } from '@prisma/client';

export async function runMockProvider(type: AssetType, prompt: string) {
  switch (type) {
    case 'TEXT':
      return `Mock text generation for: ${prompt}`;
    case 'IMAGE':
      return `https://placehold.co/600x400?text=${encodeURIComponent(prompt)}`;
    case 'VIDEO':
      return `https://example.com/mock-video/${encodeURIComponent(prompt)}`;
    default:
      return `Mock output for: ${prompt}`;
  }
}
