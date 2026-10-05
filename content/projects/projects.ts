export interface Project {
  title: string;
  description: string;
  getUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "Musik",
    description: "Widget.st app to play music on your site",
    getUrl: "https://widget.st/widget/musik",
    codeUrl: "https://github.com/nico-the-tall/widget-st-musik",
  },
  {
    title: "deploy2nekoweb",
    description: "Codeberg wrapper for deploy2nekoweb",
    codeUrl: "https://codeberg.org/nico-the-tall/deploy2nekoweb",
  },
  {
    title: "Nico's Space",
    description: "The code for this website!",
    codeUrl: "https://github.com/nico-the-tall/nicolas-nekoweb",
  },
];

export default projects;
