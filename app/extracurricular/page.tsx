import Image from "next/image";
import { extracurriculars } from "../../components/Extracurriculars";
const Extracurricular = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        extracurricular.
      </h1>
      <div className="mt-24 mb-16 h-3 w-11/12 bg-white"></div>
      <ul className="flex justify-between">
        {extracurriculars.map((extracurriculars, ind) => {
          return (
            <ExtracurricularCard key={ind}>
              <div className="border-black border-2 rounded-xl h-full w-3/4">
              <a
                href={extracurriculars.url} target="_blank">
                <p className="m-2 font-bold text-3xl hover:text-lightgreen mb-3 underline hover:cursor-pointer">{extracurriculars.position}</p>
                <p className="m-2 font-semibold text-xl my-3">{extracurriculars.time}</p>
                <p className="m-2 mt-3 text-xl">{extracurriculars.description}</p>
              </a>
              </div>
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