import { extracurriculars } from "@/components/Extracurriculars";
const MobileExtracurricular = () => {
    return (
        <div className="my-24">
          <h1 className="hover:text-lightgreen text-center text-4xl underline">
            extracurricular.
          </h1>
          <div className="my-12 h-8 mx-20 md:mx-40 bg-center rounded-2xl bg-white"></div>
          <ul className="flex-col">
        {extracurriculars.map((extracurriculars, ind) => {
          return (
            <MobileExtracurricularCard key={ind}>
              <a
                href={extracurriculars.url} target="_blank">
                <p className="font-bold text-2xl hover:text-lightgreen text-center mb-3 underline mx-4">{extracurriculars.position}</p>
                <p className="font-semibold text-xl text-center my-3 mx-4">{extracurriculars.time}</p>
                <p className="text-center mt-3 text-lg mx-4 mb-20 md:mb-12">{extracurriculars.description}</p>
              </a>
            </MobileExtracurricularCard>
          );
        })}
      </ul>
        </div>
      );
    };

export default MobileExtracurricular;

interface MobileExtracurricularProps {
  key: number;
  children: React.ReactNode;
}

const MobileExtracurricularCard= (props: MobileExtracurricularProps) => {
  return <li>{props.children}</li>;
};
