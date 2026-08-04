import { useEffect, useRef } from "react";

export function Euro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;
    const sources = [
      "https://euroring.neocities.org/scripts/onionring-variables.js",
      "https://euroring.neocities.org/scripts/minimal.js",
    ];

    sources.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      container.appendChild(script);
    });
  }, []);

  return <div ref={ref} style={{ fontSize: "0.6rem" }} />;
}
