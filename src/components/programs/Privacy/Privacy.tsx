import sx from "@/components/programs/Privacy/Privacy.module.scss";

export function Privacy() {
  return (
    <div className={sx.privacy}>
      <h1>Privacy Policy</h1>
      <small>Legal yapping I'm obligated to provide</small>
      <p>
        This website does not collect personal data or use cookies. Some
        preference settings are stored locally in your browser and are never
        transmitted anywhere. This website does make use of external providers
        and links to external sites that might track you or make use of your
        data.
      </p>

      <ul>
        <li>
          This website is hosted on Nekoweb:{" "}
          <a
            href="https://nekoweb.org/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          Guestbook is powered by Atabook:{" "}
          <a
            href="https://atabook.org/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          Fonts are served via Bunny.net:{" "}
          <a
            href="https://bunny.net/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          This website uses Cloudflare as a proxy:{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          The WebArchive program is powered by the Wayback Machine:{" "}
          <a
            href="https://archive.org/about/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
      </ul>

      <hr />
      <p>
        <strong>
          For the actual serious legal document, please check the{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            GDPR Privacy Policy
          </a>
          .
        </strong>
      </p>
      <p>
        <em>
          I do not make money from this website, offer commercial services of
          any kind or provide editorial content in any way. This website is for
          personal non-commercial recreational use.
        </em>
      </p>

      <h1>Copyright information</h1>

      <p>
        Some assets were taken from the Internet. No copyright infringement is
        intended. If you own one of these assets and want it removed, please
        contact me.
      </p>

      <p>
        Excluding copyrighted assets, all other content on this site is under{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-SA 4.0
        </a>
        . The code itself is under the{" "}
        <a
          href="https://www.mozilla.org/en-GB/MPL/2.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Public License 2.0
        </a>{" "}
        and available on{" "}
        <a
          href="https://github.com/nico-the-tall/nicolas-nekoweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <h2>Sources of 3rd party assets</h2>
      <em>
        If any of the information here is wrong, please contact me and I'll
        correct it in a timely manner.
      </em>
      <ul>
        <li>
          The character of <em>OMORI</em> is owned by <em>OMOCAT</em>
        </li>
        <li>
          <em>Bliss</em> wallpaper is owned by Microsoft
        </li>
        <li>
          <em>first-one</em> by <em>u/quenesi</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1tsy039/my_very_first_dreamcore_work_what_do_you_think/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>dreamcore</em> by <em>u/Secret-Walrus2872</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1uabyqh/making_dreamcore_picture_again/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>dreamcore1</em> by <em>u/minhyeokart</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1ugmg19/dreamcore_image_by_me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>dreamcore2</em> by <em>u/minhyeokart</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1u0nolu/dreamcore_image_by_me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>prototaxiteses</em> by <em>u/minhyeokart</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1uat8dl/dreamcore_image_by_meprototaxiteses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>attempt-1</em> by <em>u/YagizefeunalTR33</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1t6iiid/dreamcore_attempt_1/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>anomaly</em> by <em>u/b1zarr3vel</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/13vk9ml/cow_game_2023/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
        <li>
          <em>space1</em> and <em>space3</em> by <em>u/No_Manner4271</em> (
          <a
            href="https://www.reddit.com/r/dreamcoreaesthetic/comments/1n7qlst/a_space_ive_been_working_on_that_feels_like_a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
          )
        </li>
      </ul>

      <hr />

      <img
        src="/developed-by-a-human.png"
        alt="Developed by a human not by AI button"
      />
    </div>
  );
}
