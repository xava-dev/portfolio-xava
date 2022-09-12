import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="min-h-screen mt-6 lg:mt-0 w-full mx-auto flex">
      <h2
        className="sticky top-24 font-black text-xl lg:text-9xl text-darkgrey uppercase min-w-1/12 h-auto md:h-fit md:translate-x-1 ml-2 md:ml-36 pt-4 md:py-10 bg-gradient-to-b md:bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 rounded-md lg:rounded-xl md:rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        About
      </h2>
      <div className="text-white md:mt-24 md:mx-24 w-11/12 md:w-full">
        <div className="md:flex xl:items-center">
          <div className="font-medium text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="justify-center w-full md:w-full pl-4 pr-3 md:px-0 md:mt-12 xl:mt-0">
                <Image
                  src="/about/neill.jpg"
                  width={1400}
                  height={1830}
                  alt="Neill"
                  className="rounded-xl relative z-20"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-md mt-3 flex md:hidden justify-center font-extrabold flex tracking-wide items-center">
              <span className="w-fit text-5xl mr-1 md:mr-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text -translate-y-2">
                &ldquo;
              </span>
              I have no special talent. <br /> I am only passionately curious.
              <span className="w-fit text-5xl ml-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text translate-y-4">
                &rdquo;
              </span>
            </h3>
            <span className="flex md:hidden text-sm justify-end mr-4 text-gray-300 font-medium italic">
              - Albert Einstein
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-bold mt-3 md:mt-0 text-md xl:text-xl text-gray-300 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 w-11/12 md:w-full h-auto mx-4 md:mx-0 p-6 md:py-12 md:pl-24 md:pr-12 md:-ml-12 rounded-xl relative z-10">
              <p className="first-letter:text-5xl md:first-letter:text-6xl md:first-letter:-mt-1 first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                It is curiosity that propels creative ideas, creative ideas
                propel discovery, and discovery spurs innovation. It is our
                curiosity that leads to innovative solutions to complex
                problems.
              </p>
              <p className="mt-4">
                My name is Neill &quot;Xava&quot; van Steenpaal. I am a
                23-year-old in my last year of studying Political Science:
                International Relations and Organisations at Leiden University,
                Netherlands. Currently, I am on exchange studying at the
                University of Oslo in Norway.
              </p>
              <p className="mt-4">
                I am genuinely passionate about technology and development. I
                have been coding HTML, CSS and JavaScript since 2018. In the
                beginning of 2022, I decided to level up and quadruple my
                software skills. My curiosity has lead me to take courses and
                become a front-end developer and a full stack web3 developer.
                All projects mentioned above are the result of that and are from
                2022.
              </p>
              <p className="mt-4">
                I am a fast learner, problem solver and hard worker. I get
                things done, fast.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="hidden text-6xl mt-12 md:flex justify-center mr-12 font-extrabold flex tracking-wide items-center">
            <span className="w-fit text-9xl mr-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text -translate-y-8">
              &ldquo;
            </span>
            I have no special talent. <br /> I am only passionately curious.
            <span className="w-fit text-9xl ml-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text translate-y-4">
              &rdquo;
            </span>
          </h3>
          <span className="hidden md:flex mt-4 justify-end mr-16 text-gray-300 text-3xl font-medium italic">
            - Albert Einstein
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
