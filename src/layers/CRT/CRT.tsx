import sx from "@/layers/CRT/CRT.module.scss";
import { useDesktopSettingsStore } from "@/stores/desktop-settings";

export function CRT() {
  const isEnabled = useDesktopSettingsStore(
    (state) => state.isCrtOverlayEnabled,
  );

  return (
    <div
      className={sx.crt}
      style={{
        opacity: Number(isEnabled),
      }}
    />
  );
}
