import sx from "@/components/programs/Webrings/Webrings.module.scss";
import { Bisexual } from "@/components/webrings/Bisexual";
import { Euro } from "@/components/webrings/Euro";
import { Hotline } from "@/components/webrings/Hotline";
import { NoAI } from "@/components/webrings/NoAI";
import { Omori } from "@/components/webrings/Omori";
import { Online } from "@/components/webrings/Online";
import { Retronaut } from "@/components/webrings/Retronaut";
import { Webmastery } from "@/components/webrings/Webmastery";

const views = document.querySelector("#nekoweb_ssi_views")?.textContent;
const updates = document.querySelector("#nekoweb_ssi_updates")?.textContent;
const lastUpdate = document.querySelector(
  "#nekoweb_ssi_last_update",
)?.textContent;

export function Webrings() {
  return (
    <div className={sx.webrings}>
      <p>You can find me on the following webrings:</p>
      <div>
        <Bisexual />
        <Webmastery />
      </div>
      <Online />
      <Hotline />
      <Retronaut />
      <Euro />
      <NoAI />
      <Omori />

      <div className={sx.metadata}>
        <em>
          <small>{views} visitors so far.</small>
        </em>
        <em>
          <small>I've updated this site {updates} times</small>
        </em>
        <em>
          <small>Last update: {lastUpdate}</small>
        </em>
      </div>
    </div>
  );
}
