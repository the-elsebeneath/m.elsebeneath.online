// src/content/config.ts
import { defineCollection, z } from "astro:content";
const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    name: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(), // path under /src/images
    audio: z.string().optional(), // path under /public/audio
    readingTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().optional(),
  }),
});
export const collections = { stories };
