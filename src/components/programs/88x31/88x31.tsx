import sx from "@/components/programs/88x31/88x31.module.scss";
import nekowebButton from "@/assets/88x31/nekoweb.webp";
import responsiveButton from "@/assets/88x31/responsive.png";
import rainbowButton from "@/assets/88x31/rainbow.png";
import bisexualButton from "@/assets/88x31/bisexual.png";
import humanMadeButton from "@/assets/88x31/human-made.gif";
import uBlockOriginButton from "@/assets/88x31/ublock-origin.png";
import ByNcSaButton from "@/assets/88x31/by-nc-sa.png";
import emulateNowButton from "@/assets/88x31/emulate.gif";
import r2rButton from "@/assets/88x31/r2r.png";
import linuxButton from "@/assets/88x31/linux.gif";
import firefoxButton from "@/assets/88x31/firefox.gif";
import euroRingButton from "@/assets/88x31/euroring.png";
import { useRef } from "react";

export function F88x31() {
  const nicosSpaceButtonWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <div className={sx.f88x31}>
      <div ref={nicosSpaceButtonWrapper}>
        <img
          id="nicos_space_gif"
          src="/88x31.gif"
          alt="Nico's Space 88x31 gif"
          style={{
            width: "88px",
            height: "31px",
          }}
          onClick={async () => {
            const toCopy = `<a href="https://nicolas.nekoweb.org/"><img src="https://nicolas.nekoweb.org/88x31.gif" width="88" height="31" alt="Nico's Space 88x31 button"/></a>`;
            await navigator.clipboard.writeText(toCopy);

            if (nicosSpaceButtonWrapper.current) {
              const highlight = document.createElement("span");
              highlight.className = sx.nicosSpaceButtonHighlight;
              highlight.textContent = "COPIED";
              nicosSpaceButtonWrapper.current.appendChild(highlight);
              highlight.addEventListener("animationend", () =>
                highlight.remove(),
              );
            }
          }}
        />
        <strong>
          <small>&lt;-- Click to copy the button code!</small>
        </strong>
      </div>
      <div>
        <a
          className={sx.link_88x31}
          href="https://nekoweb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nekowebButton} alt="Nekoweb 88x31 button" />
        </a>
        <img src={responsiveButton} alt="Responsive website 88x31 button" />
        <img src={rainbowButton} alt="LGBT pride 88x31 button" />
        <img src={bisexualButton} alt="Bisexual pride 88x31 button" />
        <a
          className={sx.link_88x31}
          href="https://ashk.au/2024/02/18/human-made-web-button/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={humanMadeButton} alt="Human-made 88x31 button" />
        </a>
      </div>
      <div>
        <img src={uBlockOriginButton} alt="uBlock Origin 88x31 button" />
        <a
          className={sx.link_88x31}
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height={31}
            width={88}
            src={ByNcSaButton}
            alt="Creative Commons BY-NC-SA 88x31 button"
          />
        </a>
        <img src={emulateNowButton} alt="Emulate now 88x31 button" />
        <img src={r2rButton} alt="Right to Repair 88x31 button" />
        <img src={linuxButton} alt="Made on Linux 88x31 button" />
      </div>
      <div>
        <img src={firefoxButton} alt="Tested on Firefox 88x31 button" />
        <img src={euroRingButton} alt="Euroring 88x31 button " />
        <a
          href="https://www.sirkorgo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.sirkorgo.com/src/img/bumper.gif"
            alt="sirkorgo 88x31 button"
          />
        </a>
        <a href="https://ghostk.id/" target="_blank">
          <img
            src="https://ghostk.id/i/88x31.gif"
            width="88"
            height="31"
            alt="https://ghostk.id button"
          />
        </a>
        <a href="https://v0idspace.nekoweb.org/" target="_blank">
          <img src="https://v0idspace.nekoweb.org/stamps/v0idbutton.gif" />
        </a>
      </div>
    </div>
  );
}
