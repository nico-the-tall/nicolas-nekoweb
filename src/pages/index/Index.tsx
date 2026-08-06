import { ProgramIcon } from "@/components/ProgramIcon/ProgramIcon";
import { programs } from "@/constants/programs";
import { Desktop } from "@/layers/Desktop/Desktop";
import sx from "@/pages/index/Index.module.scss";

export function Index() {
  return (
    <div className={sx.index}>
      <div className={sx.icons_area}>
        {programs.map((program) => (
          <ProgramIcon key={program.id} program={program} />
        ))}
      </div>

      <Desktop />
    </div>
  );
}
