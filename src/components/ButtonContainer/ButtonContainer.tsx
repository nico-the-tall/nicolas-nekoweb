import { useState, type JSX } from "react";
import sx from "@/components/ButtonContainer/ButtonContainer.module.scss";

interface Props {
  text: string;
  children: JSX.Element;
}

export function ButtonContainer({ text, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={sx.button_container}>
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
