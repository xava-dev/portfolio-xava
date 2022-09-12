import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
    scale: 1,
  }),
  hidden: { opacity: 0, scale: 0 },
};

const Tech = () => {
  const techLogo = [
    { url: "/tech/html-css.png", id: 1, alt: "html and css", level: "100%" },
    {
      url: "/tech/javascript-typescript.png",
      id: 2,
      alt: "javascript and typescript",
      level: "70%",
    },
    { url: "/tech/react.png", id: 3, alt: "react", level: "70%" },
    { url: "/tech/redux.png", id: 4, alt: "redux", level: "60%" },
    { url: "/tech/nextjs.png", id: 5, alt: "next.js", level: "80%" },
    { url: "/tech/python.png", id: 6, alt: "python", level: "70%" },
    { url: "/tech/solidity.png", id: 7, alt: "solidity", level: "75%" },
    { url: "/tech/web3js.png", id: 8, alt: "web3.js", level: "70%" },
    { url: "/tech/mocha.png", id: 9, alt: "mocha", level: "70%" },
    { url: "/tech/metamask.png", id: 10, alt: "metamask", level: "80%" },
    { url: "/tech/tailwind.png", id: 11, alt: "tailwind css", level: "90%" },
    { url: "/tech/chakraui.png", id: 12, alt: "chakra ui", level: "90%" },
    { url: "/tech/semanticui.png", id: 13, alt: "semantic ui", level: "90%" },
    { url: "/tech/shopify.png", id: 14, alt: "shopify", level: "100%" },
    { url: "/tech/magento.png", id: 15, alt: "magento 2", level: "90%" },
    { url: "/tech/github.png", id: 16, alt: "github", level: "70%" },
    { url: "/tech/monday.png", id: 17, alt: "monday", level: "100%" },
    { url: "/tech/webstorm.png", id: 18, alt: "webstorm", level: "70%" },
    {
      url: "/tech/vscode.png",
      id: 19,
      alt: "visual studio code",
      level: "70%",
    },
    { url: "/tech/photoshop.png", id: 20, alt: "photoshop", level: "90%" },
  ];

  return (
    <div id="tech" className="w-full flex justify-center pt-12 lg:pt-20">
      <h2
        className="font-black text-xl lg:text-9xl my-1 md:my-2 ml-2 md:ml-14 text-darkgrey uppercase min-w-1/12 md:translate-x-1 pt-4 md:py-10 bg-gradient-to-b md:bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 rounded-md lg:rounded-xl md:rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        Tech
      </h2>
      <ul className="flex flex-wrap justify-evenly content-evenly md:pl-1 md:pr-10">
        {techLogo.map(({ url, id, alt, level }, i) => {
          return (
            <motion.div
              key={id}
              variants={variants}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <li className="group relative my-1 md:my-2 w-40 h-20 lg:w-56 lg:h-24 border border-gray-700 rounded-md text-center">
                <Image
                  src={url}
                  alt={alt}
                  layout={"fill"}
                  objectFit={"contain"}
                  className="scale-75 duration-500 md:scale-50 group-hover:scale-75"
                />
                <div className="hidden group-hover:block w-full h-full">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                    style={{ width: `${level}` }}
                  ></div>
                </div>
              </li>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default Tech;
