import sx from "@/components/programs/Atabook/Atabook.module.scss";

export function Atabook() {
  return (
    <div className={sx.atabook}>
      <iframe src="https://nico-the-tall.atabook.org" />
    </div>
  );
}
