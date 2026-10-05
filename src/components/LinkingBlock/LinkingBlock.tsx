import sx from "@/components/LinkingBlock/LinkingBlock.module.scss";
import type { Project } from "~/content/projects/projects";

type Props = Project & { ramblingSlug?: string; date?: string };

export function LinkingBlock({
  title,
  description,
  getUrl,
  codeUrl,
  ramblingSlug,
  date,
}: Props) {
  return (
    <div className={sx.linking_block}>
      <div className={sx.top}>
        <p>
          <em>♦</em> {title}
        </p>

        <div className={sx.links}>
          {getUrl && (
            <a href={getUrl} target="_blank" rel="noopener noreferrer">
              <small>Project</small>
            </a>
          )}

          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <small>Code</small>
            </a>
          )}

          {ramblingSlug && (
            <a href={`?yapping=${ramblingSlug}`}>
              <small>Read it</small>
            </a>
          )}
        </div>
      </div>

      <span>
        <small>
          <em>{date ? `${date} - ${description}` : description}</em>
        </small>
      </span>
    </div>
  );
}
