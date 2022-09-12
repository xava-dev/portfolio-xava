import Typewriter from "typewriter-effect";

const Professions = () => {
  return (
    <div className="flex flex-col items-center pt-28 lg:pt-32">
      <div className="w-fit text-xl lg:text-4xl xl:text-5xl font-black md:mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        I am a
      </div>
      <div className="w-fit text-2xl lg:text-6xl xl:text-8xl font-black relative z-20 text-white">
        <Typewriter
          options={{
            strings: [
              "Front-end Developer",
              "Full Stack Web3 Developer",
              "Smart Contract Developer",
              "E-Commerce Expert",
              "Problem Solver",
              "Fast Learner",
              "Hard Worker",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Professions;
