import { ProgramIcon } from "@/components/ProgramIcon/ProgramIcon";
import { Taskbar } from "@/components/Taskbar/Taskbar";
import { programs } from "@/constants/programs";
import { CRT } from "@/layers/CRT/CRT";
import { Desktop } from "@/layers/Desktop/Desktop";
import { Wallpaper } from "@/layers/Wallpaper/Wallpaper";
import sx from "@/pages/index/Index.module.scss";

export function Index() {
  return (
    <div className={sx.index}>
      <CRT />

      <Wallpaper />

      <div className={sx.index_content}>
        <div className={sx.icons_area}>
          {programs.map((program) => (
            <ProgramIcon key={program.id} program={program} />
          ))}
        </div>

        <Desktop />
      </div>

      <Taskbar />
    </div>
  );
}
