import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";
import sx from "./Modal.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, children, className }: Props) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const el = dialog.current;
    if (open && el && !el.open) el.showModal();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className={clsx(sx.modal, !open && sx.closing)}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && !open) {
          dialog.current?.close();
        }
      }}
    >
      <div className={clsx(sx.content, className)}>
        <button
          type="button"
          className={sx.close}
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
}
