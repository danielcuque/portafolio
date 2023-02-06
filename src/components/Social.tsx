import GitHubIcon from "./Icons/GithubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";

interface SocialItems {
  icon: React.ReactNode;
  link: string;
}

const socialItems: SocialItems[] = [
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/daniel-cuque-bb94541ab/",
  },
  {
    icon: <GitHubIcon />,
    link: "https://github.com/danielcuque",
  },
];

export const Social = () => {
  return (
    <div className="fixed left-6 bottom-10 w-10">
      <ul className="flex flex-col w-full h-full gap-8">
        {socialItems.map(({ icon, link }) => (
          <li key={link}>
            <a className="text-base w-10 bg-white" target="_blank" href={link}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
