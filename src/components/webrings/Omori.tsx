import { useEffect, useRef } from "react";

export function Omori() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;
    const src = "https://aviatorlaw.neocities.org/webring.js";

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.setAttribute("data-char", "omori");
    script.setAttribute("data-theme", "white");
    container.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        .omori_webring {
          width: 100%;

          img {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="omori_webring"
        style={{
          overflowX: "scroll",
        }}
        ref={ref}
      />
    </>
  );
}
