import { programs, type Program } from "@/constants/programs";
import { useWindowStore } from "@/stores/window";
import { Rnd } from "react-rnd";
import sx from "@/layers/Desktop/Desktop.module.scss";
import windowBaseSx from "@/components/WindowBase/WindowBase.module.scss";
import { WindowBase } from "@/components/WindowBase/WindowBase";
import { useState } from "react";

const { width: vWPx, height: vHPx } = document.body.getBoundingClientRect();

const isSmallScreen = vWPx <= 960 || vHPx <= 800;

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
            <h1>You're on a small screen</h1>

            <p>
              Hiho! Due to the nature of this website, achieving full
              responsiveness is not quite possible without making lots of
              changes.
            </p>

            <p>
              This website has been tested up to a resolution of{" "}
              <strong>1024x768</strong>
            </p>

            <p>
              You can move the programs around and zoom-in/out to read the
              content properly. I'm still working on making the experience
              pleasant on small devices.
            </p>

            <p>
              In case you need to contact me, do it on{" "}
              <em>nico.the.tall@proton.me</em> or on Discord:{" "}
              <em>nico.the.tall</em>
            </p>

            <p>
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
