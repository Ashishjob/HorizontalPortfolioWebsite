import Image from "next/image";
import { projects } from "../../components/Projects";
const MobileProjects = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen text-center text-4xl underline">
        projects.
      </h1>
      <div className="my-12 h-8 mx-20 md:mx-40 bg-center rounded-2xl bg-white"></div>
      <ul className="flex-col">
          {projects.map((projects, ind) => {
            return (
              <MobileProjectsCard key={ind}>
                <a href={projects.url} target="_blank">
                  <p className="font-bold text-2xl hover:text-lightgreen text-center mb-3 underline mx-4">
                    {projects.title}
                  </p>
                  <p className="font-semibold text-xl text-center my-3 mx-4">
                    {projects.description}
                  </p>
                  <p className="text-center mt-3 text-lg mx-4">{projects.time}</p>
                  <div className="flex flex-row justify-center">
                    {projects.icons.map((icon, icon_ind) => {
                      return (
                        <Image
                          src={`/${icon}.svg`}
                          width="35"
                          height="35"
                          alt={icon}
                          className="mr-3 my-2 mb-12 items-center justify-center"
                        />
                      );
                    })}
                  </div>
                </a>
              </MobileProjectsCard>
            );
          })}
      </ul>
    </div>
  );
};

export default MobileProjects;

interface MobileProjectsProps {
  key: number;
  children: React.ReactNode;
}

const MobileProjectsCard = (props: MobileProjectsProps) => {
  return <li>{props.children}</li>;
};
