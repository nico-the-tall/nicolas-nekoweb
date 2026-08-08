import { ProgramIcon } from "@/components/ProgramIcon/ProgramIcon";
import { Taskbar } from "@/components/Taskbar/Taskbar";
import { programs, extPrograms } from "@/constants/programs";
import { CRT } from "@/layers/CRT/CRT";
import { Desktop } from "@/layers/Desktop/Desktop";
import { Wallpaper } from "@/layers/Wallpaper/Wallpaper";
import sx from "@/pages/index/Index.module.scss";

const programsList = [...programs, ...extPrograms];

export function Index() {
  return (
    <>
      <CRT />

      <Wallpaper />

      <div className={sx.index}>
        <div className={sx.icons_area}>
          {programsList.map((program) => (
            <ProgramIcon key={program.id} program={program} />
          ))}
        </div>

        <Desktop />
      </div>

      <Taskbar />
    </>
  );
}
