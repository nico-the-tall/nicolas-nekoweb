import sx from "@/components/ProjectBlock/ProjectBlock.module.scss";

interface Props {
  title: string;
  description: string;
  getUrl?: string;
  codeUrl?: string;
}

export function ProjectBlock({ title, description, getUrl, codeUrl }: Props) {
  return (
    <div className={sx.project_block}>
      <div className={sx.top}>
        <p>
          <em>&gt;</em> {title}
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
