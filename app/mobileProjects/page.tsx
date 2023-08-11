import Image from "next/image";
import { projects } from "../../components/Projects";

const MobileProjects = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen text-center text-4xl underline">
        projects.
      </h1>
      <div className="my-12 h-2 mx-20 md:mx-40 bg-center bg-white"></div>
      <ul className="flex-col">
        {projects.map((project, ind) => (
          <MobileProjectsCard key={ind}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <p className="font-bold text-2xl hover:text-lightgreen text-center mb-3 underline mx-4">
                {project.title}
              </p>
              <p className="text-center mt-3 text-lg mx-4">{project.time}</p>
              <p className="font-semibold text-xl text-center my-3 mx-24">
                {project.description}
              </p>
              <div className="flex flex-row justify-center">
                {project.icons.map((icon, icon_ind) => (
                  <Image
                    key={icon_ind}
                    src={`/${icon}.svg`}
                    width={35}
                    height={35}
                    alt={icon}
                    className="mr-3 my-2 mb-12 items-center justify-center"
                  />
                ))}
              </div>
            </a>
          </MobileProjectsCard>
        ))}
      </ul>
    </div>
  );
};

export default MobileProjects;

interface MobileProjectsProps {
  children: React.ReactNode;
}

const MobileProjectsCard = (props: MobileProjectsProps) => {
  return <li>{props.children}</li>;
};
