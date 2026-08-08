import { programs, type Program } from "@/constants/programs";
import { useWindowStore } from "@/stores/window";
import { Rnd } from "react-rnd";
import sx from "@/layers/Desktop/Desktop.module.scss";
import windowBaseSx from "@/components/WindowBase/WindowBase.module.scss";
import { WindowBase } from "@/components/WindowBase/WindowBase";

export function Desktop() {
  const openWindowIds = useWindowStore((state) => state.openIds);

  const openPrograms = programs.reduce<Program[]>((acc, program) => {
    if (openWindowIds.includes(program.id)) {
      acc.push(program);
    }

    return acc;
  }, []);

  return (
    <div className={sx.desktop}>
      {openPrograms.map(
        ({
          id,
          xMultOffset,
          yMultOffset,
          window: ProgramWindow,
          title,
          className,
        }) => (
          <Rnd
            key={id}
            bounds="parent"
            default={{
              x: window.innerWidth * 0.8 * (xMultOffset ?? 0.15),
              y: window.innerHeight * 0.8 * (yMultOffset ?? 0.15),
              height: "auto",
              width: "auto",
            }}
            dragHandleClassName={windowBaseSx.header}
            className={sx.rnd}
            tabIndex={0}
          >
            <WindowBase title={title} id={id} className={className}>
              <ProgramWindow />
            </WindowBase>
          </Rnd>
        ),
      )}
    </div>
  );
}
