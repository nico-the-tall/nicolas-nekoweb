import sx from "@/components/ProjectBlock/ProjectBlock.module.scss";
import type { Project as Props } from "~/content/projects/projects";

export function ProjectBlock({ title, description, getUrl, codeUrl }: Props) {
  return (
    <div className={sx.project_block}>
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
        </div>
      </div>

      <span>
        <small>
          <em>{description}</em>
        </small>
      </span>
    </div>
  );
}
