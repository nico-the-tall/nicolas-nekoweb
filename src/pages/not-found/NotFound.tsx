import sx from "@/pages/not-found/NotFound.module.scss";
import sadMac from "@/assets/dead-mac.webp";
import qr from "@/assets/qr.svg";
import { useEffect } from "react";

export function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/");
    }, 10000);
  }, []);

  return (
    <div className={sx.not_found}>
      <div className={sx.content}>
        <span className={sx.title}>FATAL SYSTEM ERROR</span>

        <img src={sadMac} alt="Picture of a sad Mac computer" />

        <div>
          <p>An error has occurred. To continue:</p>
          <p>
            <strong>
              Click <a href="/">HERE</a> to return to the Desktop
            </strong>
            , or
          </p>
          <p>
            <strong>wait 10 seconds</strong> for the system to restart.
          </p>
          <p>This incident has been recorded.</p>

          <div className={sx.qr_wrapper}>
            <img src={qr} alt="This is a QR code" />
            <p>Error: 404_PAGE_NOT_FOUND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
