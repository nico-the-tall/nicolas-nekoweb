import { programs } from "@/constants/programs";
import { create } from "zustand";

interface WindowStore {
  openIds: string[];
  open: (id: string) => void;
  close: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  openIds: programs
    .filter((program) => program.defaultProgram)
    .map((program) => program.id),
  open: (id) => {
    set((state) => {
      const programIndex = state.openIds.findIndex((openId) => openId === id);

      if (programIndex < 0) {
        return { openIds: [...state.openIds, id] };
      }

      const copy = state.openIds.toSpliced(programIndex, 1);
      return { openIds: [...copy, id] };
    });
  },
  close: (id) => {
    set((state) => ({
      openIds: state.openIds.filter((openId) => openId !== id),
    }));
  },
}));
