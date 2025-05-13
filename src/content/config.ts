import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repository: z.string(),
    url: z.string().url().optional(),
    date: z.date().optional(),
    published: z.boolean(),
  }),
});

export const collections = {
  project: projectCollection,
};
