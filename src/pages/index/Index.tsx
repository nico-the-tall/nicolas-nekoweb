import { DateTime } from "@/components/DateTime/DateTime";
import { ProgramIcon } from "@/components/ProgramIcon/ProgramIcon";
import { programs, extPrograms } from "@/constants/programs";
import { Desktop } from "@/layers/Desktop/Desktop";
import { Wallpaper } from "@/layers/Wallpaper/Wallpaper";
import sx from "@/pages/index/Index.module.scss";

const programsList = [...programs, ...extPrograms];

export function Index() {
  return (
    <>
      <div className={sx.crt} />

      <Wallpaper />

      <div className={sx.index}>
        <div className={sx.icons_area}>
          {programsList.map((program) => (
            <ProgramIcon key={program.id} program={program} />
          ))}
        </div>

        <Desktop />
      </div>

      <div className={sx.task_bar}>
        <div className={sx.left}>
          <button>Accessibility</button>
          <button>Mood</button>
        </div>
        <div className={sx.right}>
          <DateTime />
        </div>
      </div>
    </>
  );
}
