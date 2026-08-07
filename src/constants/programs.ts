import type React from "react";
import textIcon from "@/assets/icons/text.png";
import imageIcon from "@/assets/icons/image.png";
import trophyIcon from "@/assets/icons/trophy.gif";
import nicosSpaceIcon from "@/assets/icons/nicos-space.png";
import F88x31Icon from "@/assets/icons/88x31.png";
import webringsIcon from "@/assets/icons/webrings.png";
import { ReadMe } from "@/components/programs/ReadMe/ReadMe";
import { WallpaperSelector } from "@/components/programs/WallpaperSelector/WallpaperSelector";
import { WebArchive } from "@/components/programs/WebArchive/WebArchive";
import { F88x31 } from "@/components/programs/88x31/88x31";
import { Webrings } from "@/components/programs/Webrings/Webrings";

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
    id: "webarchive",
    title: "WebArchive",
    window: WebArchive,
    icon: nicosSpaceIcon,
  },
  {
    id: "readme",
    title: "README",
    defaultProgram: true,
    defaultX: 300,
    defaultY: 50,
    icon: textIcon,
    window: ReadMe,
  },
  {
    id: "88x31",
    title: "88x31 Buttons",
    window: F88x31,
    icon: F88x31Icon,
    defaultProgram: true,
    defaultX: 1400,
    defaultY: 500,
  },
  {
    id: "webrings",
    title: "Webrings",
    window: Webrings,
    icon: webringsIcon,
    defaultProgram: true,
    defaultX: 1400,
    defaultY: 30,
  },
  {
    id: "wallpaper",
    title: "Wallpaper Select",
    window: WallpaperSelector,
    icon: imageIcon,
  },
  {
    id: "readme2",
    title: "EXAMPLE",
    icon: trophyIcon,
    window: ReadMe,
  },
];
