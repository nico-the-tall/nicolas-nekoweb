import sx from "@/components/programs/Socials/Socials.module.scss";

export function Socials() {
  return (
    <div className={sx.socials}>
      <h1>Need to get in contact with me?</h1>
      <div className={sx.buttons}>
        <p>As easy as pressing one of these buttons:</p>
        <div>
          <a
            className="link_btn"
            href="mailto:nico.the.tall@proton.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            EMAIL: NICO.THE.TALL@PROTON.ME
          </a>
          <a
            className="link_btn"
            href="https://discord.com/users/907441653760032839"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISCORD: NICO.THE.TALL
          </a>
        </div>
      </div>
      <div className={sx.reasons}>
        <div>
          <p>You can contact me for the following reasons:</p>
          <ul>
            <li>Requesting information about this website</li>
            <li>Copyright claims</li>
            <li>Concerns about the privacy policy</li>
            <li>To tell me you like the website</li>
            <li>To ask if you can use it as inspiration</li>
            <li>If you found a typo/bug somewhere</li>
            <li>If you want the recipe of my turmeric baked chicken</li>
            <li>If you just want to say hi</li>
          </ul>
        </div>
        <hr />
        <div>
          <p>
            Do <em>not</em> contact me for the following reasons:
          </p>
          <ul>
            <li>To ask me for money</li>
            <li>
              To tell me you <em>don't</em> like the website
            </li>
            <li>To sell me anything</li>
            <li>To ask for development help</li>
            <li>To ask me to test your app/site/game</li>
            <li>To tell me you don't like chicken</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
