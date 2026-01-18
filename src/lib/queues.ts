import { Queue } from 'bullmq';
import { redis } from '@/lib/redis';

export const generationQueue = new Queue('generation', {
  connection: redis,
});
