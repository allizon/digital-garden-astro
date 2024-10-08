// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: {},
});

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string(),
    title: z.string(),
    subhead: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  articles: articleCollection,
};
