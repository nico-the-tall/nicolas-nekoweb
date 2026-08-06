const wallpaperModules = import.meta.glob(
  "@/assets/wallpapers/*.{png,jpg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

export const wallpapers = Object.values(wallpaperModules).map((wallpaper) => ({
  title: wallpaper.split("/").at(-1),
  wallpaper,
}));
