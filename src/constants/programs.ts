import type React from "react";
import textIcon from "@/assets/icons/text.png";
import imageIcon from "@/assets/icons/image.png";
import trophyIcon from "@/assets/icons/trophy.gif";
import nicosSpaceIcon from "@/assets/icons/nicos-space.png";
import { ReadMe } from "@/components/programs/ReadMe/ReadMe";
import { WallpaperSelector } from "@/components/programs/WallpaperSelector/WallpaperSelector";
import { WebArchive } from "@/components/programs/WebArchive/WebArchive";

export interface Program {
  id: string;
  title: string;
  window: React.FC;
  defaultProgram?: boolean;
  defaultX?: number;
  defaultY?: number;
  icon?: string;
  className?: string;
}

export const programs: Program[] = [
  {
    id: "readme",
    title: "README",
    defaultProgram: true,
    defaultX: 500,
    defaultY: 50,
    icon: textIcon,
    window: ReadMe,
  },
  {
    id: "readme2",
    title: "EXAMPLE",
    icon: trophyIcon,
    window: ReadMe,
  },
  {
    id: "wallpaper",
    title: "Wallpaper Select",
    window: WallpaperSelector,
    icon: imageIcon,
  },
  {
    id: "webarchive",
    title: "WebArchive",
    window: WebArchive,
    icon: nicosSpaceIcon,
  },
];
