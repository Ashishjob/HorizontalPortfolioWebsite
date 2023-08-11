import { experiences } from "../../components/Experiences";
const MobileExperience = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen text-center text-4xl underline">
        work experience.
      </h1>
      <div className="my-12 h-8 mx-20 md:mx-40 bg-center rounded-2xl bg-white"></div>
      <ul className="flex-col">
        {experiences.map((experience, ind) => {
          return (
            <MobileExperienceCard key={ind}>
              <a
                href={experience.url} target="_blank">
                <p className="font-bold text-2xl hover:text-lightgreen text-center mb-3 underline mx-4">{experience.position}</p>
                <p className="font-semibold text-xl text-center my-3 mx-4">{experience.time}</p>
                <p className="text-center mt-3 text-lg mx-8 mb-20 md:mb-12">{experience.description}</p>
              </a>
            </MobileExperienceCard>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileExperience;

interface MobileExperienceProps {
  key: number;
  children: React.ReactNode;
}

const MobileExperienceCard = (props: MobileExperienceProps) => {
  return <li>{props.children}</li>;
};
