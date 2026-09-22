import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    topic: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    sourceName: z.string(),
    sourceUrl: z.string().url()
  })
});

export const collections = { posts };
