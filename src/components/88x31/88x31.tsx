import sx from "@/components/88x31/88x31.module.scss";
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
import antiNftButton from "@/assets/88x31/antinft.gif";
import bestViewedOnDesktopButton from "@/assets/88x31/bestvieweddesktop.png";
import getGayerButton from "@/assets/88x31/getgayer.png";
import iLikeComputerButton from "@/assets/88x31/ilikecomputer.png";
import parentalAdvisoryButton from "@/assets/88x31/parentaladvisory.png";

export function F88x31() {
  return (
    <div className={sx.f88x31}>
      <img src={responsiveButton.src} alt="Responsive website 88x31 button" />
      <img src={rainbowButton.src} alt="LGBT pride 88x31 button" />
      <img src={bisexualButton.src} alt="Bisexual pride 88x31 button" />
      <a
        className={sx.link_88x31}
        href="https://ashk.au/2024/02/18/human-made-web-button/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={humanMadeButton.src} alt="Human-made 88x31 button" />
      </a>
      <img src={uBlockOriginButton.src} alt="uBlock Origin 88x31 button" />
      <a
        className={sx.link_88x31}
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={31}
          width={88}
          src={ByNcSaButton.src}
          alt="Creative Commons BY-NC-SA 88x31 button"
        />
      </a>
      <img src={emulateNowButton.src} alt="Emulate now 88x31 button" />
      <img src={r2rButton.src} alt="Right to Repair 88x31 button" />
      <img src={linuxButton.src} alt="Made on Linux 88x31 button" />
      <img src={firefoxButton.src} alt="Tested on Firefox 88x31 button" />
      <img src={euroRingButton.src} alt="Euroring 88x31 button " />
      <img src={antiNftButton.src} alt="Anti NFT 88x31 button" />
      <img
        src={bestViewedOnDesktopButton.src}
        alt="Best Viewed on Desktop 88x31 button"
      />
      <img src={getGayerButton.src} alt="Get Gayer 88x31 button" />
      <img src={iLikeComputerButton.src} alt="I Like Computer 88x31 button" />
      <img
        src={parentalAdvisoryButton.src}
        alt="Parental Advisory 88x31 button"
      />

      <div className={sx.f88x31}>
        <small>
          <em>Sites I find awesome</em>
        </small>
        <a href="https://ghostk.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ghostk.id/i/88x31.gif"
            width="88"
            height="31"
            alt="https://ghostk.id button"
          />
        </a>
        <a
          href="https://v0idspace.nekoweb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://v0idspace.nekoweb.org/stamps/v0idbutton.gif"
            alt="Voidspace button"
          />
        </a>
        <a
          className={sx.link_88x31}
          href="https://nekoweb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nekowebButton.src} alt="Nekoweb 88x31 button" />
        </a>
        <a href="https://dimden.dev/" target="_blank" rel="noopener noreferrer">
          <img src="https://dimden.dev/services/images/88x31.gif" />
        </a>
        <a
          href="https://max.nekoweb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://max.nekoweb.org/images/button.png"
            alt="max's apartment"
          />
        </a>
        <a href="https://jbc.lol" target="_blank" rel="noopener noreferrer">
          <img
            src="https://jbc.lol/imgs/buttons/jbtn.svg"
            alt="jb's site"
            style={{ imageRendering: "pixelated" }}
          />
        </a>
      </div>
    </div>
  );
}
