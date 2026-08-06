import textIcon from "@/assets/icons/text.png";
import trophyIcon from "@/assets/icons/trophy.gif";
import { ReadMe } from "@/components/programs/ReadMe/ReadMe";
import type React from "react";

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
    id: "readme1",
    title: "EXAMPLE",
    defaultProgram: true,
    defaultX: 300,
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
    id: "readme3",
    title: "EXAMPLE",
    window: ReadMe,
  },
];
