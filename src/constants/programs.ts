import type React from "react";
import omoriIcon from "@/assets/icons/omori.gif";
import textIcon from "@/assets/icons/text.png";
import imageIcon from "@/assets/icons/image.png";
import nicosSpaceIcon from "@/assets/icons/nicos-space.png";
import F88x31Icon from "@/assets/icons/88x31.png";
import webringsIcon from "@/assets/icons/webrings.png";
import atabookIcon from "@/assets/icons/atabook.png";
import gitHubIcon from "@/assets/icons/github.png";
import aniListIcon from "@/assets/icons/anilist.png";
import socialsIcon from "@/assets/icons/socials.png";
import steamIcon from "@/assets/icons/steam.png";
import { ReadMe } from "@/components/programs/ReadMe/ReadMe";
import { WallpaperSelector } from "@/components/programs/WallpaperSelector/WallpaperSelector";
import { WebArchive } from "@/components/programs/WebArchive/WebArchive";
import { F88x31 } from "@/components/programs/88x31/88x31";
import { Webrings } from "@/components/programs/Webrings/Webrings";
import { Atabook } from "@/components/programs/Atabook/Atabook";
import { Privacy } from "@/components/programs/Privacy/Privacy";
import { Socials } from "@/components/programs/Socials/Socials";

export interface ProgramBase {
  id: string;
  title: string;
  icon?: string;
}

export interface Program extends ProgramBase {
  window: React.FC;
  defaultProgram?: boolean;
  xMultOffset?: number;
  yMultOffset?: number;
  className?: string;
}

export interface ExternalLink extends ProgramBase {
  href: string;
}

export const programs: Program[] = [
  {
    id: "readme",
    title: "README",
    defaultProgram: true,
    xMultOffset: 0.15,
    yMultOffset: 0.05,
    icon: omoriIcon,
    window: ReadMe,
  },
  {
    id: "88x31",
    title: "88x31 Buttons",
    window: F88x31,
    icon: F88x31Icon,
    defaultProgram: true,
    xMultOffset: 0.9,
    yMultOffset: 0.9,
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
    xMultOffset: 0.6,
    yMultOffset: 0.05,
    window: Atabook,
  },
  {
    id: "webarchive",
    title: "WebArchive",
    window: WebArchive,
    icon: nicosSpaceIcon,
  },
  {
    id: "privacy",
    title: "Privacy & Legal",
    window: Privacy,
    yMultOffset: 0.1,
    icon: textIcon,
  },
  {
    id: "socials",
    title: "Contact Me",
    window: Socials,
    icon: socialsIcon,
  },
];

export const extPrograms: ExternalLink[] = [
  {
    id: "ext_github",
    title: "GitHub",
    href: "https://github.com/nico-the-tall",
    icon: gitHubIcon,
  },
  {
    id: "ext_anilist",
    title: "AniList",
    href: "https://anilist.co/user/NicoTheTall/animelist",
    icon: aniListIcon,
  },
  {
    id: "ext_steam",
    title: "Steam",
    href: "https://steamcommunity.com/profiles/76561199386565954/",
    icon: steamIcon,
  },
];
