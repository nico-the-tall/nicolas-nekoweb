import { wallpapers } from "@/constants/wallpapers";
import { create } from "zustand";

interface WallpaperStore {
  wallpaper: string;
  changeWallpaper: (wallpaper: string) => void;
}

export const useWallpaperStore = create<WallpaperStore>((set) => ({
  wallpaper:
    wallpapers[Math.floor(Math.random() * wallpapers.length)].wallpaper,
  changeWallpaper: (wallpaper) => {
    set(() => ({ wallpaper }));
  },
}));
