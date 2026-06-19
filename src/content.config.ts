import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional().default(false),
  }),
});

const pixar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pixar' }),
  schema: z.object({
    title: z.string(),
    subhead: z.string(),
    date: z.date(),
    release_date: z.date(),
    watched: z.date(),
    emotional_rating: z.number().min(1).max(5),
    actual_rating: z.number().min(1).max(5),
    imdb: z.string().optional(),
    tmdb: z.string().optional(),
    rotten_tomatoes: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts, pixar };
