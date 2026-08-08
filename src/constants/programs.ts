import type React from "react";
import textIcon from "@/assets/icons/text.png";
import imageIcon from "@/assets/icons/image.png";
import nicosSpaceIcon from "@/assets/icons/nicos-space.png";
import F88x31Icon from "@/assets/icons/88x31.png";
import webringsIcon from "@/assets/icons/webrings.png";
import atabookIcon from "@/assets/icons/atabook.png";
import { ReadMe } from "@/components/programs/ReadMe/ReadMe";
import { WallpaperSelector } from "@/components/programs/WallpaperSelector/WallpaperSelector";
import { WebArchive } from "@/components/programs/WebArchive/WebArchive";
import { F88x31 } from "@/components/programs/88x31/88x31";
import { Webrings } from "@/components/programs/Webrings/Webrings";
import { Atabook } from "@/components/programs/Atabook/Atabook";

export interface Program {
  id: string;
  title: string;
  window: React.FC;
  defaultProgram?: boolean;
  xMultOffset?: number;
  yMultOffset?: number;
  icon?: string;
  className?: string;
}

export const programs: Program[] = [
  {
    id: "readme",
    title: "README",
    defaultProgram: true,
    xMultOffset: 0.1,
    yMultOffset: 0.05,
    icon: textIcon,
    window: ReadMe,
  },
  {
    id: "88x31",
    title: "88x31 Buttons",
    window: F88x31,
    icon: F88x31Icon,
    defaultProgram: true,
    xMultOffset: 0.9,
    yMultOffset: 0.8,
  },
  {
    id: "webrings",
    title: "Webrings",
    window: Webrings,
    icon: webringsIcon,
    defaultProgram: true,
    xMultOffset: 1,
    yMultOffset: 0.05,
  },
  {
    id: "wallpaper",
    title: "Wallpaper Select",
    window: WallpaperSelector,
    icon: imageIcon,
  },
  {
    id: "atabook",
    title: "Guestbook",
    icon: atabookIcon,
    window: Atabook,
  },
  {
    id: "webarchive",
    title: "WebArchive",
    window: WebArchive,
    icon: nicosSpaceIcon,
  },
];
