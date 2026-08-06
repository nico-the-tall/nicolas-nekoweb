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
    set((state) =>
      state.openIds.includes(id) ? state : { openIds: [...state.openIds, id] },
    );
  },
  close: (id) => {
    set((state) => ({
      openIds: state.openIds.filter((openId) => openId !== id),
    }));
  },
}));
