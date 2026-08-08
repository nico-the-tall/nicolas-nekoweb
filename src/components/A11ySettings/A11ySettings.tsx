import sx from "@/components/A11ySettings/A11ySettings.module.scss";
import { ButtonContainer } from "@/components/ButtonContainer/ButtonContainer";
import { useDesktopSettingsStore } from "@/stores/desktop-settings";
import { useEffect, useMemo } from "react";

export function A11ySettings() {
  const isCrtOverlayEnabled = useDesktopSettingsStore(
    (state) => state.isCrtOverlayEnabled,
  );

  const toggleCrtOverlay = useDesktopSettingsStore(
    (state) => state.toggleCrtOverlay,
  );

  const isSystemFontEnabled = useDesktopSettingsStore(
    (state) => state.isSystemFontEnabled,
  );

  const toggleSystemFont = useDesktopSettingsStore(
    (state) => state.toggleSystemFont,
  );

  const isSystemScrollbarEnabled = useDesktopSettingsStore(
    (state) => state.isSystemScrollbarEnabled,
  );

  const toggleSystemScrollbar = useDesktopSettingsStore(
    (state) => state.toggleSystemScrollbar,
  );

  const isCleanWallpaperModeEnabled = useDesktopSettingsStore(
    (state) => state.isCleanWallpaperModeEnabled,
  );

  const toggleCleanWallpaperMode = useDesktopSettingsStore(
    (state) => state.toggleCleanWallpaperMode,
  );

  const settingsEnabled = useMemo(
    () =>
      [
        !isCrtOverlayEnabled,
        isSystemFontEnabled,
        isSystemScrollbarEnabled,
        isCleanWallpaperModeEnabled,
      ].reduce<number>((acc, setting) => acc + Number(setting), 0),
    [
      isCrtOverlayEnabled,
      isSystemFontEnabled,
      isSystemScrollbarEnabled,
      isCleanWallpaperModeEnabled,
    ],
  );

  useEffect(() => {
    document.body.classList.toggle("system_font", isSystemFontEnabled);
  }, [isSystemFontEnabled]);

  useEffect(() => {
    document.body.classList.toggle(
      "system_scrollbar",
      isSystemScrollbarEnabled,
    );
  }, [isSystemScrollbarEnabled]);

  useEffect(() => {
    document
      .querySelector("#wallpaper_layer")
      ?.classList.toggle("clean_wallpaper", isCleanWallpaperModeEnabled);
  }, [isCleanWallpaperModeEnabled]);

  return (
    <div className={sx.a11y_settings}>
      <ButtonContainer text={`Accessibility (${settingsEnabled})`}>
        <>
          <p>
            Make this site more comfortable for your needs. This will be
            remembered on your next visit:
          </p>

          <div>
            <input
              id="a11y_crt"
              type="checkbox"
              checked={!isCrtOverlayEnabled}
              onChange={() => {
                toggleCrtOverlay();
              }}
            />
            <label htmlFor="a11y_crt">Disable CRT overlay</label>
          </div>

          <div>
            <input
              id="a11y_system_font"
              type="checkbox"
              checked={isSystemFontEnabled}
              onChange={() => {
                toggleSystemFont();
              }}
            />
            <label htmlFor="a11y_system_font">
              Use system font (better for dyslexia)
            </label>
          </div>

          <div>
            <input
              id="a11y_system_scrollbar"
              type="checkbox"
              checked={isSystemScrollbarEnabled}
              onChange={() => {
                toggleSystemScrollbar();
              }}
            />
            <label htmlFor="a11y_system_scrollbar">Use native scrollbars</label>
          </div>

          <div>
            <input
              id="a11y_clean_wallpaper_mode"
              type="checkbox"
              checked={isCleanWallpaperModeEnabled}
              onChange={() => {
                toggleCleanWallpaperMode();
              }}
            />
            <label htmlFor="a11y_clean_wallpaper_mode">
              Use clean wallpapers
            </label>
          </div>
        </>
      </ButtonContainer>
    </div>
  );
}
