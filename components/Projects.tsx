import React, { useState } from "react";
import Image from "next/image";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { ImPlay } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const Projects = () => {
  const [previewActive, setPreviewActive] = useState(false);
  const handleClickOnPreview = () => {
    setPreviewActive(!previewActive);
  };

  return (
    <>
      <div
        id="preview"
        className={`${
          previewActive ? "flex" : "hidden"
        } "w-screen h-screen justify-center items-center relative z-40 bg-darkgrey`}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden lg:flex">
            <iframe
              width="1000"
              height="630"
              src="https://www.youtube.com/embed/wkxR0tTuG5I"
              title="Optify | Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex lg:hidden">
            <iframe
              width="350"
              height="220"
              src="https://www.youtube.com/embed/wkxR0tTuG5I"
              title="Optify | Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <MdOutlineClose
            className="text-gray-300 hover:text-white text-4xl z-70 absolute top-20 right-10 lg:right-20 hover:cursor-pointer"
            onClick={handleClickOnPreview}
          />
        </motion.div>
      </div>
      <div
        id="projects"
        className="min-h-screen w-full mx-auto flex mt-6 md:mt-0"
      >
        <ul className="w-full md:w-5/6 md:pl-16 md:mt-24 md:pb-60 snap-y snap-mandatory overflow-scroll min-h-screen overflow-y-hidden">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <li className="w-full md:w-11/12 relative md:flex flex-row items-center snap-start h-fit w-fit ml-2 md:ml-20 py-10 px-6 md:px-0 bg-purple-600/10 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto md:w-1/2 md:ml-10 md:mr-auto">
                <Image
                  src="/projects/optify-mockups.png"
                  width={520}
                  height={320}
                  alt="Optify"
                />
              </div>
              <div className="text-white w-full md:max-w-xl text-center md:text-right md:ml-auto md:mr-20 md:w-1/2">
                <span className="uppercase tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Co-founder & Front-end Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black mr-0 ml-auto">
                  SaaS Startup
                </h3>
                <div className="relative my-4 text-white max-w-xl z-20 md:text-right">
                  <p className="font-medium text-xs md:text-sm">
                    Optify is a Software-as-a-Service for webshops to
                    automatically optimize images in bulk. Optify automatically
                    crops out whitespace, compresses without losing quality and
                    converts to .WEBP to increase page loading speed. The other
                    co-founder is the backend developer. Optify will launch in
                    Oct, 2022.
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex justify-center md:justify-end w-fit flex-wrap mr-0 ml-auto uppercase">
                  <li>#NEXT.JS</li>
                  <li className="ml-2">#REACT</li>
                  <li className="ml-2">#TYPESCRIPT</li>
                  <li className="ml-2">#TAILWINDCSS</li>
                  <li className="ml-2">#COMMERCIAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-md flex flex-col md:flex-row justify-center mx-auto md:justify-end md:mr-0 md:ml-auto w-fit items-center">
                  <Link href="/portfolio#preview">
                    <a
                      onClick={handleClickOnPreview}
                      className="flex items-center hover:text-white md:mt-4 md:mr-6 cursor-pointer"
                    >
                      <ImPlay width={30} height={30} className="mr-2 " />
                      Watch Preview
                    </a>
                  </Link>
                  <div className="uppercase mt-4 whitespace-nowrap text-white w-fit md:mr-0 md:ml-auto font-medium text-[10px] px-4 py-1 border rounded-full">
                    Coming soon
                  </div>
                </div>
              </div>
            </li>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <li className="w-full md:w-11/12 relative md:flex flex-row mt-3 md:mt-10 items-center snap-start h-fit w-fit ml-2 md:ml-20 md:mr-10 py-10 px-6 bg-green-600/10 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto text-white text-center md:text-left max-w-xl md:mr-auto md:ml-20 md:w-1/2">
                <div className="block md:hidden w-full mx-auto">
                  <Image
                    src="/projects/kickstarter-mockup-devices.png"
                    width={520}
                    height={320}
                    alt="Kickstarter Web3 Clone"
                  />
                </div>
                <span className="uppercase tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Full Stack Web3 Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black">
                  Web3 Kickstarter
                </h3>
                <div className="relative my-4 text-white max-w-xl z-20">
                  <p className="font-medium text-xs md:text-sm">
                    A Kickstarter clone built with Smart Contracts in Solidity,
                    tested and deployed on the Rinkeby testnetwork of the
                    Ethereum Blockchain. A MetaMask wallet can connect and
                    interact with the Smart Contract through the web3 integrated
                    front-end.
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex w-fit flex-wrap uppercase justify-center md:justify-start">
                  <li className="mr-2">#BLOCKCHAIN</li>
                  <li className="mr-2">#SOLIDITY</li>
                  <li className="mr-2">#WEB3.JS</li>
                  <li className="mr-2">#MOCHA</li>
                  <li className="mr-2">#METAMASK</li>
                  <li className="mr-2">#NEXT.JS</li>
                  <li className="mr-2">#REACT</li>
                  <li className="mr-2">#SEMANTICUI</li>
                  <li>#PERSONAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-2xl flex flex-row justify-center md:justify-start">
                  <a
                    href="https://github.com/xava-dev/kickstarter-web3"
                    target="_blank"
                    className="hover:text-white mr-2"
                    rel="noreferrer"
                  >
                    <TbBrandGithub width={30} height={30} />
                  </a>
                  <a
                    href="https://kickstarter-web3.vercel.app"
                    target="_blank"
                    className="hover:text-white"
                    rel="noreferrer"
                  >
                    <TbExternalLink width={30} height={30} />
                  </a>
                </div>
              </div>
              <div className="hidden md:block w-1/2 text-right mr-10">
                <Image
                  src="/projects/kickstarter-mockup-devices.png"
                  width={520}
                  height={320}
                  alt="Kickstarter Web3 Clone"
                />
              </div>
            </li>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <li className="w-full md:w-11/12 relative mt-3 md:mt-10 md:flex flex-row items-center snap-start h-fit w-fit ml-2 md:ml-20 py-10 px-6 md:px-0 bg-[#E50914]/10 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto md:w-1/2 md:ml-10 md:mr-auto">
                <Image
                  src="/projects/netflix-mockup.png"
                  width={520}
                  height={320}
                  alt="Netflix clone"
                />
              </div>
              <div className="text-white w-full md:max-w-xl text-center md:text-right md:ml-auto md:mr-20 md:w-1/2">
                <span className="uppercase tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black mr-0 ml-auto">
                  Netflix Clone
                </h3>
                <div className="relative my-4 text-white max-w-xl z-20 md:text-right">
                  <p className="font-medium text-xs md:text-sm">
                    Full Stack Enterprise level Next JS application. Includes
                    passwordless login authentication, Hasura Database, GraphQL
                    & Youtube API. Note: project is still in development
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex justify-center md:justify-end w-fit flex-wrap mr-0 ml-auto uppercase">
                  <li>#NEXT.JS</li>
                  <li className="ml-2">#REACT</li>
                  <li className="ml-2">#TYPESCRIPT</li>
                  <li className="ml-2">#TAILWINDCSS</li>
                  <li className="ml-2">#PASSWORDLESS</li>
                  <li className="ml-2">#AUTHENTICATION</li>
                  <li className="ml-2">#GRAPHQL</li>
                  <li className="ml-2">#PERSONAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-2xl flex justify-end flex-row justify-center md:justify-end">
                  <a
                    href="https://github.com/xava-dev/netflix-clone"
                    target="_blank"
                    className="hover:text-white mr-2"
                    rel="noreferrer"
                  >
                    <TbBrandGithub width={30} height={30} />
                  </a>
                  <a
                    href="https://netflix-clone-xava-dev.vercel.app/login"
                    target="_blank"
                    className="hover:text-white"
                    rel="noreferrer"
                  >
                    <TbExternalLink width={30} height={30} />
                  </a>
                </div>
              </div>
            </li>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <li className="w-full md:w-11/12 relative md:flex flex-row mt-3 md:mt-10 items-center snap-start h-fit w-fit ml-2 md:ml-20 md:mr-10 py-10 px-6 bg-black/50 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto text-white text-center md:text-left max-w-xl md:mr-auto md:ml-20 md:w-1/2">
                <div className="block md:hidden w-full mx-auto mb-3">
                  <Image
                    src="/projects/space-invaders-mockup.png"
                    width={520}
                    height={320}
                    alt="Space Invaders"
                  />
                </div>
                <span className="uppercase tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black">
                  Space Invaders
                </h3>
                <div className="relative my-4 text-white max-w-xl z-20">
                  <p className="font-medium text-xs md:text-sm">
                    A popular game from 1978, made with JavaScript. Dodge
                    bullets and defeat the invaders before they reach you. Feel
                    free to play. Sound on for the full experience.
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex w-fit flex-wrap uppercase justify-center md:justify-start">
                  <li className="mr-2">#GAME</li>
                  <li className="mr-2">#JAVASCRIPT</li>
                  <li className="mr-2">#HTML</li>
                  <li className="mr-2">#CANVAS</li>
                  <li>#PERSONAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-2xl flex flex-row justify-center md:justify-start">
                  <a
                    href="https://github.com/xava-dev/space-invaders"
                    target="_blank"
                    className="hover:text-white mr-2"
                    rel="noreferrer"
                  >
                    <TbBrandGithub width={30} height={30} />
                  </a>
                  <a
                    href="https://xava-dev.github.io/space-invaders/"
                    target="_blank"
                    className="hover:text-white"
                    rel="noreferrer"
                  >
                    <TbExternalLink width={30} height={30} />
                  </a>
                </div>
              </div>
              <div className="hidden md:block w-1/2 text-right mr-10">
                <Image
                  src="/projects/space-invaders-mockup.png"
                  width={520}
                  height={320}
                  alt="Space Invaders"
                  className="rounded-xl"
                />
              </div>
            </li>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <li className="w-full md:w-11/12 mt-3 md:mt-10 relative md:flex flex-row items-center snap-start h-fit w-fit ml-2 md:ml-20 py-10 px-6 md:px-0 bg-[#c14527]/10 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto md:w-1/2 md:ml-10 md:mr-auto">
                <Image
                  src="/projects/similarscent-mockup-devices.png"
                  width={520}
                  height={320}
                  alt="Similar Scent"
                />
              </div>
              <div className="text-white w-full md:max-w-xl text-center md:text-right md:ml-auto md:mr-20 md:w-1/2">
                <span className="uppercase md:tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Founder & Front-end Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black mr-0 ml-auto lg:whitespace-nowrap">
                  Webshop Startup
                </h3>
                <div className="relative my-4 text-white max-w-xl z-20 md:text-right">
                  <p className="font-medium text-xs md:text-sm">
                    Similar Scent is a Shopify webshop selling inspired
                    perfumes. The front-end is fully customized and is complete
                    with external plugins and additional home-made features.
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex w-fit flex-wrap mr-0 ml-auto uppercase justify-center md:justify-end">
                  <li>#SHOPIFY</li>
                  <li className="ml-2">#LIQUID</li>
                  <li className="ml-2">#JAVASCRIPT</li>
                  <li className="ml-2">#PHOTOSHOP</li>
                  <li className="ml-2">#COMMERCIAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-2xl flex justify-end flex-row justify-center md:justify-end">
                  <a
                    href="https://similarscent.com/en"
                    target="_blank"
                    className="hover:text-white"
                    rel="noreferrer"
                  >
                    <TbExternalLink width={30} height={30} />
                  </a>
                </div>
              </div>
            </li>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <li className="w-full md:w-11/12 relative md:flex flex-row mt-3 md:mt-10 items-center snap-start h-fit w-fit ml-2 md:ml-20 md:mr-10 py-10 px-6 bg-blue-600/10 rounded-2xl backdrop-blur-lg">
              <div className="w-full mx-auto text-white text-center md:text-left max-w-xl md:mr-auto md:ml-20 md:w-1/2">
                <div className="block md:hidden w-full mx-auto mb-3">
                  <Image
                    src="/projects/mini-blockchain.png"
                    width={520}
                    height={320}
                    alt="Kickstarter Web3 Clone"
                  />
                </div>
                <span className="uppercase tracking-widest font-medium text-[10px] md:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Backend Developer
                </span>
                <h3 className="text-3xl md:text-5xl mt-1 font-black">
                  Mini Blockchain
                </h3>
                <div className="relative my-4 text-white max-w-xl md:max-w-md z-20">
                  <p className="font-medium text-xs md:text-sm">
                    I have built my own mini blockchain in Python. It generates
                    hashes, validates the blockchain and has proof-of-work.
                    However, it is not decentralized as it runs locally.
                  </p>
                </div>
                <ul className="font-light text-[10px] md:text-xs text-gray-500 flex w-fit flex-wrap uppercase justify-center md:justify-start">
                  <li className="mr-2">#BLOCKCHAIN</li>
                  <li className="mr-2">#PYTHON</li>
                  <li className="mr-2">#HASHING</li>
                  <li className="mr-2">#PROOFOFWORK</li>
                  <li>#PERSONAL</li>
                </ul>
                <div className="w-full mt-4 text-gray-500 text-2xl flex flex-row justify-center md:justify-start">
                  <a
                    href="https://github.com/xava-dev/mini-blockchain"
                    target="_blank"
                    className="hover:text-white"
                    rel="noreferrer"
                  >
                    <TbBrandGithub width={30} height={30} />
                  </a>
                </div>
              </div>
              <div className="hidden md:block w-1/2 text-right mr-10">
                <Image
                  src="/projects/mini-blockchain.png"
                  width={520}
                  height={320}
                  alt="Mini Blockchain in Python"
                  className="rounded-xl"
                />
              </div>
            </li>
          </motion.div>
        </ul>
        <h2
          className="sticky top-24 font-black text-xl ml-3 md:ml-0 lg:text-9xl text-darkgrey uppercase min-w-1/12 h-auto md:h-fit mr-3 md:mr-36 md:translate-x-1 pt-4 md:py-10 bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 rounded-md lg:rounded-xl"
          style={{ writingMode: "vertical-rl" }}
        >
          Projects
        </h2>
      </div>
    </>
  );
};

export default Projects;
