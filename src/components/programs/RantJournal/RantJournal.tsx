import sx from "@/components/programs/RantJournal/RantJournal.module.scss";
import thoughts from "@/constants/thoughts";

export function RantJournal() {
  return (
    <div className={sx.rant_journal}>
      <h1>A place for me to rant about anything</h1>
      <small>
        I was lazy with this one and did the bare minimum. I'll redesign it at
        some point.
      </small>

      <hr />

      {thoughts.map((thought) => (
        <div className={sx.entry}>
          <p>
            <strong>
              {new Date(thought.timestamp).toLocaleDateString("de-DE")}
            </strong>
          </p>
          {thought.text ? (
            <p>{thought.text}</p>
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html: thought.html ?? "",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
