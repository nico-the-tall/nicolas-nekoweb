import sx from "@/components/programs/WebArchive/WebArchive.module.scss";

export function WebArchive() {
  return (
    <div className={sx.web_archive}>
      <small>
        If this doesn't load or loads slowly, blame Wayback Machine. Donate to
        the Internet Archive so they can keep being awesome.
      </small>
      <iframe src="https://web.archive.org/web/20260616201916_/https://nicolas.nekoweb.org/" />
    </div>
  );
}
