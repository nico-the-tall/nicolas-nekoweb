import sx from "@/components/ProgramIcon/ProgramIcon.module.scss";
import textIcon from "@/assets/icons/text.png";
import type { ExternalLink, Program } from "@/constants/programs";
import { useWindowStore } from "@/stores/window";

interface Props {
  program: Program | ExternalLink;
}

export function ProgramIcon({ program }: Props) {
  const open = useWindowStore((state) => state.open);

  const { id, title, icon } = program;

  return (
    <div
      className={sx.program_icon}
      tabIndex={0}
      onDoubleClick={() => {
        if ("href" in program) {
          window.open(program.href, "_newtab");
        } else {
          open(id);
        }
      }}
    >
      {icon ? <img src={icon} /> : <img src={textIcon} alt="" />}
      <span>{title}</span>
    </div>
  );
}
