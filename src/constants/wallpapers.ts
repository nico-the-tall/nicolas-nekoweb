import Bliss from "@/assets/wallpapers/bliss.webp";
import Test from "@/assets/wallpapers/test.png";

interface Wallpaper {
  title: string;
  wallpaper: string;
}

export const wallpapers: Wallpaper[] = [
  {
    title: "Bliss",
    wallpaper: Bliss,
  },
  {
    title: "test",
    wallpaper: Test,
  },
];
