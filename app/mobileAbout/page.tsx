import Image from "next/image";
const MobileAbout = () => {
  return (
    <div className="my-24">
      <h1 className="hover:text-lightgreen text-4xl text-center underline">
        ashish job.
      </h1>
      <p className="my-5 text-xl text-center font-light">cs + math student @ uh.</p>
      <div className="flex items-center justify-center">
        <a href="https://www.linkedin.com/in/ashish-job/" target="_blank">
          <Image
            className="hover:hidden absolute mx-4"
            src="/LinkedIn.svg"
            alt="LinkedIn"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative mx-4"
            src="/HoverLinkedIn.svg"
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </a>
        <a href="https://github.com/Ashishjob" target="_blank">
        <Image
            className="hover:hidden absolute mx-4"
            src="/GitHub.svg"
            alt="GitHub"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative mx-4"
            src="/HoverGitHub.svg"
            alt="GitHub"
            width={50}
            height={50}
          />
        </a>
        <a href="Ashish_Job_Resume.pdf" target="_blank">
        <Image
            className="hover:hidden absolute mx-4"
            src="/Resume.png"
            alt="Resume"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative mx-4"
            src="/HoverResume.png"
            alt="Resume"
            width={50}
            height={50}
          />
        </a>
        <a href="mailto:ashishjob104@gmail.com">
        <Image
            className="hover:hidden absolute mx-4"
            src="/Email.png"
            alt="Email"
            width={50}
            height={50}
          />
          <Image
            className="hover:relative mx-4"
            src="/HoverEmail.png"
            alt="Email"
            width={50}
            height={50}
          />
        </a>
      </div>
      <h2 className="hover:text-lightgreen mt-12 text-center text-2xl"> about me</h2>
      <h5 className="mt-6 text-xl text-center mx-16">
        hey there! my name is ashish job, and i am majoring in computer science
        with a minor in mathematics at the university of houston with a passion
        in the sub-fields of artificial intelligence and software engineering.
        In addition to my technical side, i also love pandas, to play
        volleyball, draw, read manga, and listen to new music. <br></br>
        <br></br> feel free to connect with me on linkedin, check out my work on
        github, or shoot me an email!
      </h5>
    </div>
  );
};

export default MobileAbout;
