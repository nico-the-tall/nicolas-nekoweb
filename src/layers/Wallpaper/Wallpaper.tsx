import { useWallpaperStore } from "@/store/wallpaper";
import sx from "@/layers/Wallpaper/Wallpaper.module.scss";

export function Wallpaper() {
  const selectedWallpaper = useWallpaperStore((state) => state.wallpaper);

  return (
    <div
      className={sx.wallpaper}
      style={{ backgroundImage: `url(${selectedWallpaper})` }}
    />
  );
}
