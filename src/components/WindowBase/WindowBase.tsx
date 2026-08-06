import sx from "@/components/WindowBase/WindowBase.module.scss";
import { useWindowStore } from "@/store/window";
import clsx from "clsx";

interface Props {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function WindowBase({ id, title, className, children }: Props) {
  const close = useWindowStore((state) => state.close);

  return (
    <div className={clsx(sx.window_base_default, className)}>
      <div className={sx.header}>
        <span>{title}</span>

        <div
          onClick={() => {
            close(id);
          }}
        >
          <span>X</span>
        </div>
      </div>
      <hr />
      <div className={sx.content}>{children}</div>
    </div>
  );
}
