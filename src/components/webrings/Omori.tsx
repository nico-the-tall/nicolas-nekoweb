import { useEffect, useRef } from "react";

export function Omori() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;
    const src = "https://aviatorlaw.neocities.org/webring.js";

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.setAttribute("data-char", "mewo");
    script.setAttribute("data-theme", "headspace");
    container.appendChild(script);
  }, []);

  return (
    <div
      style={{
        maxWidth: "300px",
      }}
      ref={ref}
    />
  );
}
