import sx from "@/components/programs/ReadMe/ReadMe.module.scss";
import profileImg from "@/assets/profile.gif";
import { Wavy } from "@/components/Wavy/Wavy";

const views = document.querySelector("#nekoweb_ssi_views")?.textContent;
const updates = document.querySelector("#nekoweb_ssi_updates")?.textContent;
const lastUpdate = document.querySelector(
  "#nekoweb_ssi_last_update",
)?.textContent;

export function ReadMe() {
  return (
    <div className={sx.readme}>
      <div className={sx.upper}>
        <h1>Hiho!</h1>
        <h1>My name is Nico</h1>
        <p>
          Some call me <em>Nick</em>, a few <em>Klaus</em> and one person{" "}
          <em>Maxi</em>.
        </p>
      </div>

      <div className={sx.profile}>
        <Wavy />
        <img src={profileImg} alt="My profile image" />
      </div>

      <hr />

      <div className={sx.lower}>
        <h2>Information you didn't ask for:</h2>
        <ul>
          <li>Software developer</li>
          <li>Engineering graduate</li>
          <li>Live in Germany</li>
          <li>
            Born in the late 90s{" "}
            <small>
              (
              <a
                href="https://en.wikipedia.org/wiki/Zillennials"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Zillennial</small>
              </a>{" "}
              gang)
            </small>
          </li>
          <li>I speak English, Spanish and German</li>
          <li>Probably autistic</li>
        </ul>

        <ul className={sx.interests}>
          <h2>Maybe you care about these:</h2>
          <li>I'm into pixel art and dream/internetcore</li>
          <li>My music taste is all over the place</li>
          <li>I seldom watch anime and drama series</li>
          <li>400+ hours on Helldivers 2, 10k+ on WoW</li>
          <li>I find 67 unironically hilarious</li>
          <li>I'm rather lazy</li>
          <p>Scroll down ⬇</p>
        </ul>
      </div>

      <div>
        <h2>About this website</h2>
        <p>This is my personal corner on the web.</p>
        <p>
          During my vacations I got the <em>totally amazing</em> idea to rework
          this website. I got rather ambitious and wanted to do a simulation of
          an old PC desktop, something you'd find back in the 90s. I didn't
          quite get the exact feeling, but I'm happy with the results.
        </p>
        <p>
          This is entirely powered up by late-night motivation and caffeine.
        </p>

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
    </div>
  );
}
