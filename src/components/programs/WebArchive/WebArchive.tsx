import sx from "@/components/programs/WebArchive/WebArchive.module.scss";

export function WebArchive() {
  return (
    <div className={sx.web_archive}>
      <div className={sx.over} />
      <iframe src="https://web.archive.org/web/20260616201916_/https://nicolas.nekoweb.org/" />
    </div>
  );
}
