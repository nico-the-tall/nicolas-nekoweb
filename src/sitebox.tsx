import { createRoot } from "react-dom/client";
import omori from "@/assets/profile.gif";
import sx from "@/sitebox.module.scss";
import "@/global.scss";
import { WindowBase } from "@/components/WindowBase/WindowBase";

createRoot(document.getElementById("root")!).render(
  <div className={sx.sitebox}>
    <div className={sx.inner}>
      <div className={sx.bsod}>
        <p>
          A problem has been detected and the system has been shut down to
          prevent damage to your computer.
        </p>

        <p>[AURA_FARMING_FAILURE]</p>

        <p>
          If this is the first time you've seen this stop error screen, restart
          your computer. If this screen appears again, follow these steps: Check
          for viruses on your computer. Remove any newly installed hard drives
          or hard drive controllers.
        </p>

        <p>
          Check your hard drive to make sure it is properly configured and
          terminated. Run CHKDSK /F to check for hard drive corruption, and then
          restart your computer.
        </p>

        <p>
          Technical information: *** STOP: 0x00000050 (0x8F5A3B20, 0x00000000,
          0x8054238C, 0x00000002) *** mydriver.sys - Address 8054238C base at
          80500000, DateStamp 3eb4df9a
        </p>
      </div>
      <img src={omori} />

      <div>
        <WindowBase title="" id="sitebox" className={sx.box}>
          <h1>Visit now</h1>
          <h2>Nico's Space</h2>
          <p>Nothing can go wrong</p>
          <p>Just trust me</p>
          <p>Dial-Up is required</p>
        </WindowBase>
      </div>
    </div>
  </div>,
);
