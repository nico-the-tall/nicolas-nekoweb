export function Webmastery() {
  return (
    <>
      <map name="badge-wwstamp">
        <area
          shape="rect"
          coords="66,38,79,49"
          href="https://webmasterwebring.netlify.app?nicolas-previous"
          alt="Previous"
        />
        <area
          shape="rect"
          coords="78,29,90,40"
          href="https://webmasterwebring.netlify.app?nicolas-next"
          alt="Next"
        />
        <area
          shape="rect"
          coords="13,15,63,47"
          href="https://webmasterwebring.netlify.app"
          alt="Webmaster Webring"
        />
      </map>
      <img
        useMap="#badge-wwstamp"
        src="https://file.garden/ZrZSgsrYfQXsO7QH/ww/stamp.png"
        alt="Webmaster Webring"
        width={99}
        height={56}
        style={{ width: "99px", height: "56px" }}
      />
    </>
  );
}
