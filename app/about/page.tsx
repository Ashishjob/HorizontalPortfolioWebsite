import Image from "next/image";
const About = () => {
  return (
    <div className="my-24 hidden lg:block">
      <h1 className="hover:text-lightgreen w-fit text-8xl underline">
        ashish job.
      </h1>
      <p className="my-5 text-3xl font-light">cs + math student @ uh.</p>
      <div className="my-12 flex w-64 justify-between">
        <a href="https://www.linkedin.com/in/ashish-job/" target="_blank">
          <Image
            className="hover:hidden absolute"
            src="/LinkedIn.svg"
            alt="LinkedIn"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative"
            src="/HoverLinkedIn.svg"
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </a>
        <a href="https://github.com/Ashishjob" target="_blank">
        <Image
            className="hover:hidden absolute"
            src="/GitHub.svg"
            alt="GitHub"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative"
            src="/HoverGitHub.svg"
            alt="GitHub"
            width={50}
            height={50}
          />
        </a>
        <a href="officialResume (2).pdf" target="_blank">
        <Image
            className="hover:hidden absolute"
            src="/Resume.png"
            alt="Resume"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative"
            src="/HoverResume.png"
            alt="Resume"
            width={50}
            height={50}
          />
        </a>
        <a href="mailto:ashishjob104@gmail.com">
        <Image
            className="hover:hidden absolute"
            src="/Email.png"
            alt="Email"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative"
            src="/HoverEmail.png"
            alt="Email"
            width={50}
            height={50}
          />
        </a>
      </div>
      <h2 className="hover:text-lightgreen mt-12 w-fit text-3xl"> about me</h2>
      <h5 className="mt-6 w-3/4 text-2xl">
        Hey there! My name is Ashish Job, and I am majoring in computer science
        with a minor in mathematics at the University of Houston with a passion
        in the sub-fields of artificial intelligence and software engineering.
        In addition to my technical side, I also love pandas, to play
        volleyball, draw, read manga, and listen to new music. <br></br>
        <br></br> Feel free to connect with me on LinkedIn, check out my work on
        GitHub, or shoot me an email!
      </h5>
      <div className="absolute right-1/4 mt-8 flex animate-pulse">
        <h6 className="text-2xl mt-2 mr-4">
        Scroll
        </h6>
      <Image
        className=""
        src="/arrow.svg"
        alt="me"
        width={50}
        height={50}
        />
        </div>
    </div>
  );
};

export default About;
