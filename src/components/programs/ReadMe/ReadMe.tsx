import sx from "@/components/programs/ReadMe/ReadMe.module.scss";
import profileImg from "@/assets/profile.gif";
import { Wavy } from "@/components/Wavy/Wavy";

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
        <h2>About me</h2>
        <ul>
          <li>I'm a software developer</li>
          <li>I have an engineering degree</li>
          <li>I live in Germany</li>
          <li>I'm almost 30 (unc)</li>
          <li>I speak English, Spanish and German</li>
          <li>I'm not very social</li>
        </ul>

        <ul className={sx.interests}>
          <li>I'm into pixel art and dream/internetcore</li>
          <li>My music taste is all over the place</li>
          <li>I seldom watch anime and drama series</li>
          <li>400+ hours on Helldivers 2, 10k+ on WoW</li>
          <li>I've played every main Megaman game</li>
          <li>I mix GB and US English a lot</li>
          <li>OMORI is my favourite game</li>
          <li>I find 67 unironically hilarious</li>
        </ul>
      </div>

      <div>
        <h2>About this website</h2>
        <p>
          During my vacations I got the <em>totally amazing</em> idea to rework
          this website. I got rather ambitious and wanted to do a simulation of
          an old PC desktop, something you'd find back in the 90s.
        </p>
        <p>
          That being said, my childhood experience with computers was with
          Windows XP, so I'm not even sure what feeling I was going for. Aiming
          for lost nostalgia I actually never experienced.
        </p>
        <p>
          I think it ended up looking ok. It also gives me extra opportunity to
          experiment with new "programs". Fitting some ideas in the old website
          would have been difficult, but here the sky is the limit. If you want
          to see how the old website looked like, open the "WebArchive" program!
        </p>
        <small>
          <em>
            All the icons for the programs (except spinning Omori) are made by
            me. I'm not that good at pixel art, but I'm happy with the results.
          </em>
        </small>
      </div>
    </div>
  );
}
