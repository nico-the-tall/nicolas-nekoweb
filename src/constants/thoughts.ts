interface Thought {
  timestamp: number;
  text?: string;
  html?: string;
}

const thoughts: Thought[] = [
  {
    timestamp: 1786257561140,
    text: "Got the revamp developed to a point where I can share it. I'm really happy with the results, even if it isn't perfect. Also moved it back to GitHub. I have a bunch of ideas for this place, let's see if my motivation lasts long enough for it.",
  },
  {
    timestamp: 1786077929560,
    text: "I'm currently updating this website. A total revamp with a new idea. Check it out later!",
  },
  {
    timestamp: 1777312800000,
    html: 'I\'ve migrated this project to Codeberg! If you\'re on Codeberg, try my adaptation of <a href="https://codeberg.org/nico-the-tall/deploy2nekoweb" target="_blank" rel="noopener noreferrer">deploy2nekoweb</a>.',
  },
  {
    timestamp: 1776733200000,
    text: "New sitebox is up! Wasn't really sure what to do for it but I'm happy with the final result <3",
  },
  {
    timestamp: 1775368800000,
    text: "Achievements are up! Ping me on Discord if you get them all.",
  },
  {
    timestamp: 1775198400000,
    text: "Responsive design up! Took a while to fine-tune it.",
  },
  {
    timestamp: 1775174400000,
    text: "Got a 404 page up! I'm putting quite a bit of time into this thing. Next thing is the responsive design and the sitebox.",
  },
  {
    timestamp: 1775001600000,
    text: "Finally got a preliminary version up. Responsiveness is still a WIP. Kinda regretting not doing mobile-first design.",
  },
];

export default thoughts;
