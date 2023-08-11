import Image from "next/image";
import { projects } from "../../components/Projects";

const Projects = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        projects.
      </h1>
      <div className="mb-16 mt-24 h-8 w-11/12 rounded-2xl bg-white"></div>
      <ul className="flex justify-evenly">
        {projects.map((project, ind) => (
          <ProjectsCard key={ind}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <p className="hover:text-lightgreen mb-3 w-2/3 text-3xl font-bold underline">
                {project.title}
              </p>
              <p className="my-3 w-2/3 text-2xl font-semibold">
                {project.description}
              </p>
              <p className="my-3 text-xl font-semibold">{project.time}</p>
              <div className="flex flex-row">
                {project.icons.map((icon, icon_ind) => (
                  <Image
                    key={icon_ind}
                    src={`/${icon}.svg`}
                    width={35}
                    height={35}
                    alt={icon}
                    className="mr-3"
                  />
                ))}
              </div>
            </a>
          </ProjectsCard>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

interface ProjectsProps {
  children: React.ReactNode;
}

const ProjectsCard = (props: ProjectsProps) => {
  return <li>{props.children}</li>;
};
