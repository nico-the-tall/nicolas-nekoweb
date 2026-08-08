import { programs, type Program } from "@/constants/programs";
import { useWindowStore } from "@/stores/window";
import { Rnd } from "react-rnd";
import sx from "@/layers/Desktop/Desktop.module.scss";
import windowBaseSx from "@/components/WindowBase/WindowBase.module.scss";
import { WindowBase } from "@/components/WindowBase/WindowBase";
import { useState } from "react";

const isSmallScreen = window.innerWidth <= 960 || window.innerHeight <= 800;

export function Desktop() {
  const openWindowIds = useWindowStore((state) => state.openIds);
  const [smallScreenAcknowledged, setSmallScreenAcknowledged] =
    useState(!isSmallScreen);

  const openPrograms = programs.reduce<Program[]>((acc, program) => {
    if (openWindowIds.includes(program.id)) {
      acc.push(program);
    }

    return acc;
  }, []);

  return (
    <div className={sx.desktop}>
      {isSmallScreen && !smallScreenAcknowledged && (
        <div
          className={sx.small_screen_warning}
          onClick={() => {
            setSmallScreenAcknowledged(true);
          }}
        >
          <div>
            <h1>To you: Small screen user</h1>

            <p>
              Making this thing responsive is awful. I can't guarantee it'll be
              a nice experience or even work at all on screens under 1024x768.
            </p>

            <p>
              I'm still working on it though. Maybe at some point a proper
              mobile-friendly version will exist.
            </p>

            <p>
              In case you need to contact me and can't open the program for it,
              do it on <em>nico.the.tall@proton.me</em> or on Discord:{" "}
              <em>nico.the.tall</em>
            </p>

            <p
              style={{
                color: "yellow",
              }}
            >
              <em>You can tap this screen to make it go away.</em>
            </p>
          </div>
        </div>
      )}

      {openPrograms.map(
        ({
          id,
          xMultOffset,
          yMultOffset,
          window: ProgramWindow,
          title,
          className,
          icon,
        }) => (
          <Rnd
            key={id}
            bounds={isSmallScreen ? undefined : "parent"}
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
            <WindowBase title={title} id={id} className={className} icon={icon}>
              <ProgramWindow />
            </WindowBase>
          </Rnd>
        ),
      )}
    </div>
  );
}
