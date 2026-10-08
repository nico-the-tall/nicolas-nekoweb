import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import type { RamblingSummary } from "@/utils/getRamblings";
import sx from "@/views/Rambling/Rambling.module.scss";
import type { ReactNode } from "react";

interface Props {
  title: string;
  date: Date;
  ramblings: RamblingSummary[];
  children: ReactNode;
}

export function Rambling({ title, date, ramblings, children }: Props) {
  return (
    <div className={sx.rambling}>
      <div className={sx.list}>
        <div className={sx.return_home}>
          <a href="/">← Return to the homepage</a>
        </div>

        <small>
          <em>Read more:</em>
        </small>

        {ramblings.map((rambling) => (
          <ContentBlock className={sx.link_wrapper} key={rambling.slug}>
            <a href={`/ramblings/${rambling.slug}`}>{rambling.title}</a>
            <small>
              <em>{new Date(rambling.date).toDateString()}</em>
            </small>
          </ContentBlock>
        ))}
      </div>

      <ContentBlock className={sx.content}>
        <div className={sx.metadata}>
          <small>
            <em>Posted on {date.toDateString()}</em>
          </small>

          <h1>
            <strong>{title}</strong>
          </h1>
        </div>

        <hr />

        <div>{children}</div>
      </ContentBlock>
    </div>
  );
}
