import Image from "next/image";
import { extracurriculars } from "../../components/Extracurriculars";
const Extracurricular = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        extracurricular.
      </h1>
      <div className="mt-24 mb-16 h-8 w-11/12 rounded-2xl bg-white"></div>
      <ul className="flex justify-between">
        {extracurriculars.map((extracurriculars, ind) => {
          return (
            <ExtracurricularCard key={ind}>
              <a
                href={extracurriculars.url} target="_blank">
                <p className="font-bold text-4xl hover:text-lightgreen w-3/4 mb-3 underline hover:cursor-pointer">{extracurriculars.position}</p>
                <p className="font-semibold text-2xl my-3">{extracurriculars.time}</p>
                <p className="w-3/4 mt-3 text-xl">{extracurriculars.description}</p>
              </a>
            </ExtracurricularCard>
          );
        })}
      </ul>
    </div>
  );
};

export default Extracurricular;

interface ExtracurricularProps {
    key: number;
    children: React.ReactNode;
  }
  
  const ExtracurricularCard = (props: ExtracurricularProps) => {
    return <li>{props.children}</li>;
  };