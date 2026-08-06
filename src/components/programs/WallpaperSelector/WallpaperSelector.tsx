import sx from "@/components/programs/WallpaperSelector/WallpaperSelector.module.scss";
import { wallpapers } from "@/constants/wallpapers";
import { useWallpaperStore } from "@/store/wallpaper";

export function WallpaperSelector() {
  const changeWallpaper = useWallpaperStore((state) => state.changeWallpaper);

  return (
    <div className={sx.wallpaper_selector}>
      {wallpapers.map(({ title, wallpaper }) => (
        <div
          id={title}
          className={sx.wallpaper_selector_row}
          onClick={() => {
            changeWallpaper(wallpaper);
          }}
        >
          <span>{title}</span>
          <img src={wallpaper} alt={`Wallpaper ${title}`} />
        </div>
      ))}
    </div>
  );
}
