import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    pubDate: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const showcaseCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
  showcase: showcaseCollection,
};
