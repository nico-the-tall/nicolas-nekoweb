import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const ramblings = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./content/ramblings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { ramblings };
