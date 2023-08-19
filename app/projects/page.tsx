import Image from "next/image";
import { projects } from "../../components/Projects";

const Projects = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        projects.
      </h1>
      <div className="mb-16 mt-24 h-3 w-full bg-white"></div>
      <ul className="flex justify-between">
        {projects.map((project, ind) => (
          <ProjectsCard key={ind}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image src={project.image} width={235} height={0} alt={project.image} className="rounded-xl shadow-2xl"/>
              <div className="bg-darkblack rounded-xl shadow-2xl w-full">
              <p className="hover:text-lightgreen hover:cursor-pointer text-3xl text-center mt-3 font-bold underline">
                {project.title}
              </p>
              <p className="m-3 text-xl font-semibold text-center">{project.time}</p>
              {/* <p className="m-3 text-lg">
                {project.description}
              </p> */}
              <div className="flex flex-row items-center justify-center">
                {project.icons.map((icon, icon_ind) => (
                  <Image
                    key={icon_ind}
                    src={`/${icon}.svg`}
                    width={25}
                    height={25}
                    alt={icon}
                    className="m-3"
                    color="white"
                  />
                ))}
              </div>
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
