import sx from "@/components/Wavy/Wavy.module.scss";

function wavy(string: string, offset: number = 0) {
  return string.split("").map((char, i) => (
    <span key={i} style={{ "--i": i + offset } as React.CSSProperties}>
      {char}
    </span>
  ));
}

export function Wavy() {
  return (
    <div className={sx.wavy}>
      <div className={sx.text}>
        <strong>
          {wavy("100%")}
          <div className={sx.space} />
          {wavy("what", 4)}
          <div className={sx.space} />
          <span style={{ "--i": 8 } as React.CSSProperties}>I</span>
          <div className={sx.space} />
          {wavy("look", 9)}
          <div className={sx.space} />
          {wavy("like", 13)}
          <div className={sx.space} />
          {wavy("-->", 17)}
        </strong>
      </div>
    </div>
  );
}
