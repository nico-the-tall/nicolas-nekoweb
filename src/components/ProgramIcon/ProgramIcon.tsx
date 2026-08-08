import sx from "@/components/ProgramIcon/ProgramIcon.module.scss";
import textIcon from "@/assets/icons/text.png";
import type { Program } from "@/constants/programs";
import { useWindowStore } from "@/stores/window";

interface Props {
  program: Program;
}

export function ProgramIcon({ program: { id, title, icon } }: Props) {
  const open = useWindowStore((state) => state.open);

  return (
    <div
      className={sx.program_icon}
      tabIndex={0}
      onDoubleClick={() => {
        open(id);
      }}
    >
      {icon ? <img src={icon} /> : <img src={textIcon} alt="" />}
      <span>{title}</span>
    </div>
  );
}
