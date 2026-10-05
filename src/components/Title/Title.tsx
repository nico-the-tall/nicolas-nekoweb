import sx from "@/components/Title/Title.module.scss";

function wavy(string: string, offset: number = 0) {
  return string.split("").map((char, i) => (
    <h1 key={i} style={{ "--i": i + offset } as React.CSSProperties}>
      {char}
    </h1>
  ));
}

export function Title() {
  return (
    <div className={sx.wavy}>
      <div className={sx.text}>
        <strong>
          {wavy("(>'.')>")}
          <div className={sx.space} />
          <div className={sx.space} />
          <div className={sx.space} />
          {wavy("Welcome", 7)}
          <div className={sx.space} />
          {wavy("to", 14)}
          <div className={sx.space} />
          {wavy("Nico's", 16)}
          <div className={sx.space} />
          {wavy("Space", 22)}
        </strong>
      </div>
    </div>
  );
}
