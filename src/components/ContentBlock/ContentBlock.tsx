import type { JSX } from "react/jsx-runtime";
import sx from "./ContentBlock.module.scss";
import clsx from "clsx";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function ContentBlock({ children, className }: Props) {
  return <div className={clsx(sx.content_block, className)}>{children}</div>;
}
