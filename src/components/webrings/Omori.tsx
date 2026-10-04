import { useEffect, useRef } from "react";
import { webringSrc } from "./webringSrc";

export function Omori() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;
    if (container.childElementCount) return;
    const src = "https://aviatorlaw.neocities.org/webring.js";

    const script = document.createElement("script");
    script.src = webringSrc(src);
    script.async = false;
    script.setAttribute("data-char", "omori");
    script.setAttribute("data-theme", "white");
    container.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        .omori_webring {
          img {
            animation: none !important;
          }

          a {
            img {
              margin: 0 !important;
            }
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
