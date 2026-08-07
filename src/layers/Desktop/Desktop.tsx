import { programs, type Program } from "@/constants/programs";
import { useWindowStore } from "@/store/window";
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
          defaultX,
          defaultY,
          window: ProgramWindow,
          title,
          className,
        }) => (
          <Rnd
            key={id}
            bounds="parent"
            default={{
              x: defaultX ?? 150,
              y: defaultY ?? 150,
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
