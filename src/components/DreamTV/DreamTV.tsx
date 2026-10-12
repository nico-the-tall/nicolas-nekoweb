import { useEffect, useState } from "react";
import sx from "@/components/DreamTV/DreamTV.module.scss";
import ssx from "@/shared.module.scss";
import testCard from "@/assets/test-card.png";

const images = Object.values(
  import.meta.glob<ImageMetadata>("@/assets/dreamcore/*", {
    eager: true,
    import: "default",
  }),
);

const SLICES = 255;
const GLITCH_MS = 300;
const TEST_CARD_CHANCE = 0.05;

function sliceShift(i: number, phase: number) {
  return Math.round(
    Math.sin(i * 3.2 + phase) * 40 + Math.sin(i * 5.5 + phase * 2) * 12,
  );
}

export function DreamTV() {
  const [index, setIndex] = useState(0);
  const [showTestCard, setShowTestCard] = useState(false);
  const [glitchPhase, setGlitchPhase] = useState<number | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let onTestCard = false;

    const interval = setInterval(() => {
      onTestCard = !onTestCard && Math.random() < TEST_CARD_CHANCE;
      setShowTestCard(onTestCard);
      if (!onTestCard) {
        setIndex(
          (i) =>
            (i + 1 + Math.floor(Math.random() * (images.length - 1))) %
            images.length,
        );
      }
      setGlitchPhase(Math.random() * Math.PI * 2);
      clearTimeout(timeout);
      timeout = setTimeout(() => setGlitchPhase(null), GLITCH_MS);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const src = showTestCard ? testCard.src : images[index].src;

  return (
    <div className={sx.dream_tv}>
      <div className={ssx.crt_overlay} />
      <img src={src} alt="" />
      {glitchPhase !== null && (
        <div key={src} className={sx.hsync}>
          {Array.from({ length: SLICES }, (_, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={
                {
                  clipPath: `inset(${(i / SLICES) * 100}% 0 ${100 - ((i + 1) / SLICES) * 100}% 0)`,
                  "--shift": `${sliceShift(i, glitchPhase)}px`,
                  animationDuration: `${GLITCH_MS}ms`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
