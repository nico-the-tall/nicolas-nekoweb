import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface CrtSettingsSlice {
  isCrtOverlayEnabled: boolean;
  toggleCrtOverlay: () => void;
}

interface SystemFontSettingsSlice {
  isSystemFontEnabled: boolean;
  toggleSystemFont: () => void;
}

interface SystemScrollbarSlice {
  isSystemScrollbarEnabled: boolean;
  toggleSystemScrollbar: () => void;
}

interface WallpaperSettingsSlice {
  isCleanWallpaperModeEnabled: boolean;
  toggleCleanWallpaperMode: () => void;
}

const createCrtSettingsSlice: StateCreator<
  CrtSettingsSlice &
    SystemFontSettingsSlice &
    SystemScrollbarSlice &
    WallpaperSettingsSlice,
  [],
  [],
  CrtSettingsSlice
> = (set) => ({
  isCrtOverlayEnabled: true,
  toggleCrtOverlay: () =>
    set((state) => ({
      ...state,
      isCrtOverlayEnabled: !state.isCrtOverlayEnabled,
    })),
});

const createSystemFontSettingsSlice: StateCreator<
  CrtSettingsSlice &
    SystemFontSettingsSlice &
    SystemScrollbarSlice &
    WallpaperSettingsSlice,
  [],
  [],
  SystemFontSettingsSlice
> = (set) => ({
  isSystemFontEnabled: false,
  toggleSystemFont: () =>
    set((state) => ({
      ...state,
      isSystemFontEnabled: !state.isSystemFontEnabled,
    })),
});

const createSystemScrollbarSlice: StateCreator<
  CrtSettingsSlice &
    SystemFontSettingsSlice &
    SystemScrollbarSlice &
    WallpaperSettingsSlice,
  [],
  [],
  SystemScrollbarSlice
> = (set) => ({
  isSystemScrollbarEnabled: false,
  toggleSystemScrollbar: () =>
    set((state) => ({
      ...state,
      isSystemScrollbarEnabled: !state.isSystemScrollbarEnabled,
    })),
});

const createWallpaperSettingsSlice: StateCreator<
  CrtSettingsSlice &
    SystemFontSettingsSlice &
    SystemScrollbarSlice &
    WallpaperSettingsSlice,
  [],
  [],
  WallpaperSettingsSlice
> = (set) => ({
  isCleanWallpaperModeEnabled: false,
  toggleCleanWallpaperMode: () =>
    set((state) => ({
      ...state,
      isCleanWallpaperModeEnabled: !state.isCleanWallpaperModeEnabled,
    })),
});

export const useDesktopSettingsStore = create<
  CrtSettingsSlice &
    SystemFontSettingsSlice &
    SystemScrollbarSlice &
    WallpaperSettingsSlice
>()(
  persist(
    (...a) => ({
      ...createCrtSettingsSlice(...a),
      ...createSystemFontSettingsSlice(...a),
      ...createSystemScrollbarSlice(...a),
      ...createWallpaperSettingsSlice(...a),
    }),
    { name: "desktop-settings" },
  ),
);
