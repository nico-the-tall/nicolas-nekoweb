import sx from "@/components/programs/FollowMe/FollowMe.module.scss";

export function FollowMe() {
  return (
    <div className={sx.follow_me}>
      <h1>Do you like this website?</h1>
      <p>
        Help me become the strongest fighter in the multiverse by clicking the
        button below:
      </p>

      <div>
        <iframe
          src="https://nekoweb.org/frame/follow"
          width="170"
          height="40"
          style={{
            border: 0,
          }}
        />
      </div>

      <small>Possible side-effects of pressing the button:</small>

      <ul>
        <li>
          <small>You become awesome(r)</small>
        </li>
        <li>
          <small>Money spawns in your bank account</small>
        </li>
        <li>
          <small>You get nice dreams today</small>
        </li>
        <li>
          <small>That person you like texts you</small>
        </li>
        <li>
          <small>m̶̧̝̱͉͊̐ǫ̸̯̺̞͎̌͘r̸̜̞̓̃̒́ẓ̸̧̈́̕a̸̢̮̳̔̋̕͠ţ̷͎̍̔̏ ̴̧͔̙̰̈́͝ṯ̷͕̪̦̗͝ḩ̴̤̟̪̋̔e̶̞̓̈̕ ̷̺̱͎̳̈́̎͛̈́̾͜ḍ̴̌͗̑e̶̦͖͒͗͂s̴̗̲̑̀̄̂t̸̜̤̫͙͋ŗ̶̻͋̈͗͛̌ǫ̵͎̋͊̈́͋̌y̴̠̩̣͗̈̉̅̕e̵̲̊r̴̘̤͒̑̀ visits you</small>
        </li>
        <li>
          <small>Spontaneous combustion</small>
        </li>
      </ul>
    </div>
  );
}
