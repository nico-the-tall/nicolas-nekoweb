import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import { Title } from "@/components/Title/Title";
import { useRef } from "react";
import sx from "@/pages/index/Index.module.scss";
import omori from "@/assets/profile.gif";
import { Bisexual } from "@/components/webrings/Bisexual";
import { Hotline } from "@/components/webrings/Hotline";
import { Euro } from "@/components/webrings/Euro";
import { NoAI } from "@/components/webrings/NoAI";
import { Omori } from "@/components/webrings/Omori";
import { Online } from "@/components/webrings/Online";
import { Retronaut } from "@/components/webrings/Retronaut";
import { Webmastery } from "@/components/webrings/Webmastery";
import { ProjectBlock } from "@/components/ProjectBlock/ProjectBlock";
import { F88x31 } from "@/components/88x31/88x31";

export function Index() {
  const nicosSpaceButtonWrapper = useRef<HTMLDivElement | null>(null);

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
                <div className={sx.glitch_overlay} />
                <img src={omori} alt="profile picture" />
              </div>

              <div>
                <div className={sx.information}>
                  <div>
                    <h2>Status</h2>
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
            <div className={sx.button} ref={nicosSpaceButtonWrapper}>
              <h2>Get my button:</h2>
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

          <ContentBlock className={sx.widgets}>
            <p>Widgets</p>
          </ContentBlock>

          <ContentBlock className={sx.webrings}>
            <p>I'm in these webrings</p>

            <div className={sx.webrings_inner}>
              <Bisexual />
              <Online />
              <Euro />
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
              <ProjectBlock
                title="Musik"
                description="Widget.st app to play music on your site"
                getUrl="https://widget.st/widget/musik"
                codeUrl="https://github.com/nico-the-tall/widget-st-musik"
              />
              <ProjectBlock
                title="deploy2nekoweb"
                description="Codeberg wrapper for deploy2nekoweb"
                codeUrl="https://codeberg.org/nico-the-tall/deploy2nekoweb"
              />
              <ProjectBlock
                title="Nico's Space"
                description="The code for this website!"
                codeUrl="https://github.com/nico-the-tall/nicolas-nekoweb"
              />
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
            </div>
          </ContentBlock>
        </div>
      </main>
    </div>
  );
}
