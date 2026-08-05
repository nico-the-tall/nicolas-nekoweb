import sx from "@/components/ProgramIcon/ProgramIcon.module.scss";
import textIcon from "@/assets/icons/text.png";
import type { Program } from "@/constants/programs";

interface Props {
  program: Program;
}

export function ProgramIcon({ program: { title, icon } }: Props) {
  return (
    <div className={sx.program_icon} tabIndex={0}>
      {icon ? <img src={icon} /> : <img src={textIcon} alt="" />}
      <span>{title}</span>
    </div>
  );
}
