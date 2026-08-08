import sx from "@/components/programs/Privacy/Privacy.module.scss";

export function Privacy() {
  return (
    <div className={sx.privacy}>
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

      <h1>Privacy Policy</h1>
      <p>
        This website does not collect personal data or use cookies. Some
        preference settings are stored locally in your browser and are never
        transmitted anywhere. This website does make use of external providers
        and links to external sites, each with their own privacy policy.
      </p>

      <p>
        This website is hosted on Nekoweb. For more information about what data
        they collect, you can read their{" "}
        <a
          href="https://nekoweb.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <p>
        Guestbook is provided by Atabook. Personal information might be
        recorded. For more information, check their{" "}
        <a
          href="https://atabook.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p>
        Fonts are served via Bunny.net in a GDPR-compliant way. For more
        information, you can read their{" "}
        <a
          href="https://bunny.net/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p>
        This website uses Cloudflare as a reverse proxy:{" "}
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p>
        For more information, you can check the full{" "}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          GDPR Privacy Policy
        </a>
        .
      </p>

      <img
        src="/developed-by-a-human.png"
        alt="Developed by a human not by AI button"
      />
    </div>
  );
}
