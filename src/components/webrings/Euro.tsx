import { useEffect, useRef } from "react";
import { webringSrc } from "@/utils/webringSrc";

export function Euro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;
    if (container.childElementCount) return;

    const sources = [
      "https://euroring.neocities.org/scripts/onionring-variables.js",
      "https://euroring.neocities.org/scripts/euroring_button.js",
    ];

    sources.forEach((src) => {
      const script = document.createElement("script");
      script.src = webringSrc(src);
      script.async = false;
      container.appendChild(script);
    });
  }, []);

  return <div id="euroring" ref={ref} />;
}
