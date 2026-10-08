import { getCollection } from "astro:content";

export async function getRamblings() {
  return (await getCollection("ramblings"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map(({ id, data }) => ({
      slug: id,
      title: data.title,
      description: data.description,
      date: data.date.toISOString().slice(0, 10),
    }));
}

export type RamblingSummary = Awaited<ReturnType<typeof getRamblings>>[number];
