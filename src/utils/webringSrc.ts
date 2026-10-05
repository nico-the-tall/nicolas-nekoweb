export function webringSrc(src: string) {
  return import.meta.env.DEV ? src.replace(/^https:\/\//, "/__webring/") : src;
}
