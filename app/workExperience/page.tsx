import Image from "next/image";
import { experiences } from "../../components/Experiences";
const Experience = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        work experience.
      </h1>
      <div className="mt-24 mb-16 h-3 w-11/12 bg-white"></div>
      <ul className="flex justify-between">
        {experiences.map((experience, ind) => {
          return (
            <ExperienceCard key={ind}>
              <a
                href={experience.url} target="_blank">
                <p className="font-bold text-4xl hover:text-lightgreen w-2/3 mb-3 underline">{experience.position}</p>
                <p className="font-semibold text-2xl my-3">{experience.time}</p>
                <p className="w-2/3 mt-3 text-xl">{experience.description}</p>
              </a>
            </ExperienceCard>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;

interface ExperienceProps {
  key: number;
  children: React.ReactNode;
}

const ExperienceCard = (props: ExperienceProps) => {
  return <li>{props.children}</li>;
};
