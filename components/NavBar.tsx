import Link from "next/link";

const NormalNavbar: React.FC = () => {
  return (
    <nav className=" h-20 items-center">
      <div className=" h-12 flex justify-between text-black text-xl bg-white">
        <a href={"/"} className="mx-12 items-center justify-center flex">
        home
        </a>
        <h1 className="items-center justify-center flex">work experience</h1>
        <h1 className="items-center justify-center flex">extracurricular</h1>
        <h1 className="items-center justify-center flex">projects</h1>
        <h1 className="mx-12 items-center justify-center flex">contact</h1>
      </div>
    </nav>
  );
};

export default NormalNavbar;
