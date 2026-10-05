import type { MDXContent } from "mdx/types";

type Rambling = {
  default: MDXContent;
  meta: {
    title: string;
    description: string;
    date: string;
  };
};

const files = import.meta.glob<Rambling>("~/content/ramblings/*.mdx", {
  eager: true,
});

export const ramblings = Object.entries(files)
  .map(([path, mod]) => ({
    ...mod.meta,
    Content: mod.default,
    slug: path.split("/").pop()!.replace(".mdx", ""),
  }))
  .toReversed();
