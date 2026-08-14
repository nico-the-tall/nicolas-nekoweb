import { useEffect, useRef } from "react";

export function Musik() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current!;
    const sources = ["https://u.widget.st/ar.js"];

    sources.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      container.appendChild(script);
    });
  }, []);

  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-expect-error */
  return <ws-widget ref={ref} type="musik" iid="5224" embed="script" />;
}
