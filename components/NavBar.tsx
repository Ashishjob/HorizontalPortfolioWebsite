import Link from "next/link";

const NormalNavbar: React.FC = () => {
  return (
    <nav className="fixed h-16 w-full bg-black border-lightgreen border">
      <div className="mx-16 my-4 flex justify-between text-white text-xl">
        <h1>home</h1>
        <h1>work experience</h1>
        <h1>extracurricular</h1>
        <h1>projects</h1>
        <h1>contact</h1>
      </div>
    </nav>
  );
};

export default NormalNavbar;
