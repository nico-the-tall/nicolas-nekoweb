import sx from "@/components/programs/Webrings/Webrings.module.scss";
import { Bisexual } from "@/components/webrings/Bisexual";
import { Euro } from "@/components/webrings/Euro";
import { Hotline } from "@/components/webrings/Hotline";
import { NoAI } from "@/components/webrings/NoAI";
import { Online } from "@/components/webrings/Online";
import { Retronaut } from "@/components/webrings/Retronaut";
import { Webmastery } from "@/components/webrings/Webmastery";

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

      <small>
        If you have a webring and you think my site would be a good addition,
        contact me!
      </small>
    </div>
  );
}
