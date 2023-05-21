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

    <>
      <div className="fixed left-12 bottom-10 w-12 hidden lg:block">
        <ul className="flex flex-col w-full h-full gap-6">
          {socialItems.map(({ icon, link }) => (
            <li key={link} className="group w-12 p-2">
              <a
                className="text-base fill-white group-hover:fill-primary-50 group-hover:transition group-hover:duration-200 group-hover:ease-in-out"
                target="_blank"
                href={link}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed right-12 bottom-10 w-12 hidden lg:block">
        <ul className="flex flex-col w-full h-full gap-6">
          <li className="group w-12 p-2">
            <a
              className="text-xs group-hover:text-primary-50 group-hover:transition group-hover:duration-200 group-hover:ease-in-out [writing-mode:vertical-lr]"
              href="mailto:danielcuque78@gmail.com">
              danielcuque78@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
