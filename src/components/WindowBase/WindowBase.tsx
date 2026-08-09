import sx from "@/components/WindowBase/WindowBase.module.scss";
import { useWindowStore } from "@/stores/window";
import clsx from "clsx";

interface Props {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  icon?: string;
}

export function WindowBase({ id, title, className, icon, children }: Props) {
  const close = useWindowStore((state) => state.close);

  return (
    <div className={clsx(sx.window_base_default, className)}>
      <div className={sx.header}>
        <div>
          {icon && <img src={icon} />}
          <small>{title}</small>
        </div>

        <div
          onClick={() => {
            close(id);
          }}
        >
          <button>X</button>
        </div>
      </div>
      <hr />
      <div className={sx.content}>{children}</div>
    </div>
  );
}
