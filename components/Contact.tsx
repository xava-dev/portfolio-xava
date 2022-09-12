import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { FaLocationArrow, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("CLICK TO COPY");
  function handleClickOnMail() {
    navigator.clipboard.writeText("neill@xava-dev.com");
    setCopySuccess("COPIED");
  }

  return (
    <div id="contact" className="mt-6 md:pt-0 min-h-screen mx-auto flex">
      <div className="w-11/12 md:w-5/6 md:ml-36 md:pl-2 md:flex -mt-10 md:mt-0 items-center pb-12 md:pb-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-full md:flex justify-center md:justify-start">
            <Image
              src="/contact/conversation.svg"
              width={600}
              height={600}
              alt="Contact"
              className="scale-75 md:scale-100"
            />
          </div>
        </motion.div>

        <div className="w-full flex flex-col -mt-6 md:mt-0 md:ml-16 text-center md:text-left justify-center md:justify-start">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="uppercase tracking-widest font-medium text-[10px] md:text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              I love a good cup of coffee
            </span>
            <div className="w-full md:mt-2 font-black text-4xl md:text-7xl text-white uppercase mb-6 flex flex-col">
              Let&apos;s meet!
            </div>
          </motion.div>

          <div className="w-full">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <ul className="flex flex-wrap content-evenly mx-2 md:mr-0 md:-ml-2">
                <li
                  className="hidden lg:flex group relative m-2 w-full xl:w-5/12 h-24 border border-gray-700 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md text-center flex-col items-center justify-center hover:cursor-pointer"
                  onClick={handleClickOnMail}
                >
                  <p className="group justify-center flex flex-row items-center text-white uppercase text-md md:text-lg duration-500 tracking-widest">
                    <GrMail className="mr-3" />
                    neill@xava-dev.com
                  </p>
                  <span className="hidden relative w-full xl:w-fit px-3 py-1 -mb-[44px] mt-[19px] bg-white text-center text-[10px] border rounded-full text-darkgrey tracking-normal md:group-hover:block justify-center">
                    {copySuccess}
                  </span>
                </li>
                <li className="group lg:hidden relative m-2 w-full xl:w-5/12 h-24 border border-gray-700 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md text-center flex flex-col items-center justify-center hover:cursor-pointer">
                  <a
                    href="mailto:neill@xava-dev.com"
                    target="_blank"
                    className="w-full h-full lg:hidden"
                    rel="noreferrer"
                  >
                    <p className="group flex h-24 justify-center items-center text-white uppercase text-md md:text-lg duration-500 tracking-widest">
                      <GrMail className="mr-3" />
                      neill@xava-dev.com
                    </p>
                  </a>
                </li>
                <li className="relative m-2 w-full xl:w-5/12 h-24 border border-gray-700 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md text-center flex items-center justify-center">
                  <p className="justify-center flex items-center text-white uppercase text-md md:text-lg duration-500 tracking-widest">
                    <FaLocationArrow className="mr-3" />
                    Oslo, Norway
                  </p>
                </li>
                <li className="relative m-2 w-full xl:w-5/12 h-24 border border-gray-700 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md text-center flex items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/neillvansteenpaal"
                    target="_blank"
                    className="w-full h-full"
                    rel="noreferrer"
                  >
                    <p className="justify-center flex h-24 items-center text-white uppercase text-md md:text-lg duration-500 tracking-widest">
                      <FaLinkedinIn className="mr-3" />
                      LinkedIn
                    </p>
                  </a>
                </li>

                <li className="relative m-2 w-full xl:w-5/12 h-24 border border-gray-700  hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-md text-center flex items-center justify-center">
                  <a
                    href="https://github.com/xava-dev"
                    target="_blank"
                    className="w-full h-full"
                    rel="noreferrer"
                  >
                    <p className="justify-center flex h-24 items-center text-white uppercase text-md md:text-lg duration-500 tracking-widest">
                      <TbBrandGithub className="mr-3" />
                      GitHub
                    </p>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <h2
        className="sticky top-24 font-black text-xl lg:text-9xl text-darkgrey uppercase min-w-1/12 h-auto md:h-fit mr-3 md:mr-36 md:translate-x-1 pt-4 md:py-10 bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 rounded-md lg:rounded-xl"
        style={{ writingMode: "vertical-rl" }}
      >
        Contact
      </h2>
    </div>
  );
};

export default Contact;
