import { useEffect, useRef, useState, type JSX } from "react";
import sx from "@/components/ButtonContainer/ButtonContainer.module.scss";

interface Props {
  text: string;
  children: JSX.Element;
}

export function ButtonContainer({ text, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={sx.button_container} ref={containerRef}>
      {isOpen && <div className={sx.container}>{children}</div>}
      <button
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        {text}
      </button>
    </div>
  );
}
