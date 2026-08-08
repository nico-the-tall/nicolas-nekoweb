import { useWallpaperStore } from "@/stores/wallpaper";
import sx from "@/layers/Wallpaper/Wallpaper.module.scss";

export function Wallpaper() {
  const selectedWallpaper = useWallpaperStore((state) => state.wallpaper);

  return (
    <div
      id="wallpaper_layer"
      className={sx.wallpaper}
      style={{ backgroundImage: `url(${selectedWallpaper})` }}
    />
  );
}
