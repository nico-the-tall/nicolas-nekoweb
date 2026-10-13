import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import { Title } from "@/components/Title/Title";
import { useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import sx from "@/views/Index/Index.module.scss";
import ssx from "@/shared.module.scss";
import omori from "@/assets/profile.gif";
import { Bisexual } from "@/components/webrings/Bisexual";
import { Hotline } from "@/components/webrings/Hotline";
import { Euro } from "@/components/webrings/Euro";
import { NoAI } from "@/components/webrings/NoAI";
import { Omori } from "@/components/webrings/Omori";
import { Online } from "@/components/webrings/Online";
import { Retronaut } from "@/components/webrings/Retronaut";
import { Webmastery } from "@/components/webrings/Webmastery";
import { LinkingBlock } from "@/components/LinkingBlock/LinkingBlock";
import { F88x31 } from "@/components/88x31/88x31";
import { Modal } from "@/components/Modal/Modal";
import projects from "~/content/projects/projects";

export type RamblingSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

type Props = {
  ramblings: RamblingSummary[];
  anilist?: ReactNode;
  lastfm?: ReactNode;
};

export function Index({ ramblings, anilist, lastfm }: Props) {
  const nicosSpaceButtonWrapper = useRef<HTMLDivElement | null>(null);
  const [guestbookOpen, setGuestbookOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);

  return (
    <div className={sx.index}>
      <main>
        <div className={sx.main_grid}>
          <ContentBlock className={sx.about}>
            <h1>
              <Title />
            </h1>
            <p>
              You have stumbled upon my home on the Internet. This is a place
              powered by 3AM inspiration and caffeine.{" "}
              <em>
                I remake this place every once in a while, don't be surprised if
                you visit again and it's completely different &lt;'(o.o)'&gt;
              </em>
            </p>
            <p>
              I'm a software developer living in Germany since 2021, working for
              the auto industry.
            </p>

            <div className={sx.about_me}>
              <p>The fact sheet:</p>
              <ul>
                <li>I have an engineering degree</li>
                <li>I'm an autumn and parks kind of guy</li>
                <li>
                  I'm into pixel art, liminal spaces and dreamcore aesthetic
                </li>
                <li>I seldom watch anime and drama series</li>
                <li>I like any music genre as long as it's fast and loud</li>
              </ul>
            </div>
          </ContentBlock>

          <ContentBlock className={sx.status}>
            <div>
              <div className={sx.img_wrapper}>
                <div className={clsx(ssx.crt_overlay, sx.glitch_overlay)} />
                <img src={omori.src} alt="profile picture" />
              </div>

              <div>
                <div className={sx.information}>
                  <div>
                    <h2>Activity</h2>
                    <span>Online</span>
                  </div>

                  <div>
                    <h2>Mood</h2>
                    <span>Peachy</span>
                  </div>
                </div>

                <div className={sx.information}>
                  <div>
                    <h2>Anxiety</h2>
                    <span>15%</span>
                  </div>

                  <div>
                    <h2>Energy</h2>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock className={sx.my_button}>
            <h2>Get my button:</h2>

            <div className={sx.button} ref={nicosSpaceButtonWrapper}>
              <img
                id="nicos_space_gif"
                src="/88x31.gif"
                alt="Nico's Space 88x31 gif"
                style={{
                  width: "88px",
                  height: "31px",
                }}
                onClick={async () => {
                  const toCopy = `<a href="https://nicolas.nekoweb.org/"><img src="https://nicolas.nekoweb.org/88x31.gif" width="88" height="31" alt="Nico's Space 88x31 button"></img></a>`;
                  await navigator.clipboard.writeText(toCopy);

                  if (nicosSpaceButtonWrapper.current) {
                    const highlight = document.createElement("span");
                    highlight.className = sx.nicosSpaceButtonHighlight;
                    highlight.textContent = "COPIED";
                    nicosSpaceButtonWrapper.current.appendChild(highlight);
                    highlight.addEventListener("animationend", () =>
                      highlight.remove(),
                    );
                  }
                }}
              />

              <small>
                <em>Click to copy code</em>
              </small>
            </div>
          </ContentBlock>

          <div className={sx.guestbook}>
            <button
              className={sx.modal_button}
              onClick={() => setGuestbookOpen(true)}
            >
              <span>(/._.)/</span> <span>新 SIGN MY GUESTBOOK</span>{" "}
              <span>\(._.\)</span>
            </button>
          </div>

          <Modal
            open={guestbookOpen}
            onClose={() => setGuestbookOpen(false)}
            className={sx.modal}
          >
            <iframe src="https://nico-the-tall.atabook.org" title="Guestbook" />
          </Modal>

          <ContentBlock className={sx.widgets}>
            <div>
              <em>Currently watching</em>
              {anilist}
            </div>

            <div>
              <em>Last Spotify activity</em>
              {lastfm}
            </div>

            <div>
              <em>Last played on Steam</em>
              <p>PLACEHOLDER</p>
            </div>

            <div>
              <em>Nekogotchi</em>
              <p>PLACEHOLDER</p>
            </div>
          </ContentBlock>

          <div className={sx.follow}>
            <button
              className={sx.modal_button}
              onClick={() => setFollowOpen(true)}
            >
              <span>(´・ω・)っ</span> <span>猫 FOLLOW ME ON NEKOWEB</span>
            </button>
          </div>

          <Modal
            open={followOpen}
            onClose={() => setFollowOpen(false)}
            className={sx.modal}
          >
            <h2>Do you like this website?</h2>
            <p>
              Help me become the strongest fighter in the multiverse by clicking
              the button below:
            </p>

            <div style={{ height: "100px" }}>
              <iframe
                src="https://nekoweb.org/frame/follow"
                width="170"
                height="40"
                style={{
                  border: 0,
                }}
              />
            </div>

            <p>
              <small>Possible side-effects of pressing the button:</small>
            </p>

            <ul>
              <li>
                <small>You become awesome(r)</small>
              </li>
              <li>
                <small>Money spawns in your bank account</small>
              </li>
              <li>
                <small>You get nice dreams today</small>
              </li>
              <li>
                <small>That person you like texts you</small>
              </li>
              <li>
                <small>m̶̧̝̱͉͊̐ǫ̸̯̺̞͎̌͘r̸̜̞̓̃̒́ẓ̸̧̈́̕a̸̢̮̳̔̋̕͠ţ̷͎̍̔̏ ̴̧͔̙̰̈́͝ṯ̷͕̪̦̗͝ḩ̴̤̟̪̋̔e̶̞̓̈̕ ̷̺̱͎̳̈́̎͛̈́̾͜ḍ̴̌͗̑e̶̦͖͒͗͂s̴̗̲̑̀̄̂t̸̜̤̫͙͋ŗ̶̻͋̈͗͛̌ǫ̵͎̋͊̈́͋̌y̴̠̩̣͗̈̉̅̕e̵̲̊r̴̘̤͒̑̀ visits you</small>
              </li>
              <li>
                <small>Spontaneuous combustion</small>
              </li>
            </ul>
          </Modal>

          <ContentBlock className={sx.webrings}>
            <p>I'm in these webrings</p>

            <div className={sx.webrings_inner}>
              <div className={sx.dual}>
                <Bisexual />
                <Euro />
              </div>

              <Online />
              <Hotline />
              <Retronaut />
              <Webmastery />
              <NoAI />
              <Omori />
            </div>
          </ContentBlock>

          <ContentBlock className={sx.projects}>
            <p>Indie web projects</p>

            <div className={sx.projects_inner}>
              {projects
                .slice(0, 7)
                .map(({ title, description, getUrl, codeUrl }) => (
                  <LinkingBlock
                    key={title}
                    title={title}
                    description={description}
                    getUrl={getUrl}
                    codeUrl={codeUrl}
                  />
                ))}
            </div>
          </ContentBlock>

          <ContentBlock className={sx.buttons}>
            <p>Button gallery</p>
            <F88x31 />
          </ContentBlock>

          <ContentBlock className={sx.ramblings}>
            <p>Latest ramblings</p>

            <div className={sx.ramblings_inner}>
              <small>
                <em>Updates once every aeon</em>
              </small>

              <div className={sx.ramblings_list}>
                {ramblings.map(({ title, description, slug, date }) => (
                  <LinkingBlock
                    key={slug}
                    title={title}
                    description={description}
                    ramblingSlug={slug}
                    date={date}
                  />
                ))}
              </div>
            </div>
          </ContentBlock>

          <ContentBlock className={sx.contact}>
            <p>Contact me</p>

            <div>
              <em>Discord</em>

              <a
                href="https://discord.com/users/907441653760032839"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nico.the.tall
              </a>
            </div>

            <div>
              <em>Email</em>

              <a href="mailto:nico.the.tall@proton.me">
                nico.the.tall@proton.me
              </a>
            </div>
          </ContentBlock>
        </div>
      </main>
    </div>
  );
}
