import sx from "@/components/Taskbar/Taskbar.module.scss";
import { DateTime } from "@/components/DateTime/DateTime";
import { NowPlayingWidgetSt } from "@/components/NowPlayingWidgetSt/NowPlayingWidgetSt";
import { A11ySettings } from "@/components/A11ySettings/A11ySettings";

export function Taskbar() {
  return (
    <div className={sx.task_bar}>
      <div className={sx.left}>
        <A11ySettings />
      </div>
      <div className={sx.right}>
        <div className={sx.music}>
          <div>
            <small>
              <strong>Current/Last song:</strong>
            </small>
            <small>
              Powered by{" "}
              <a
                href="https://widget.st"
                target="_blank"
                rel="noopener noreferrer"
              >
                Widget.st
              </a>
            </small>
          </div>
          <NowPlayingWidgetSt />
        </div>
        <DateTime />
      </div>
    </div>
  );
}
