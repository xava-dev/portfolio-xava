import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full absolute md:fixed top-0 py-4 backdrop-blur-lg z-30">
      <div className="lg:mx-32 flex items-center">
        <Link href="/portfolio">
          <a className="flex items-center w-full md:w-fit justify-center md:justify-start">
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text font-black text-5xl md:ml-5 pr-5 border-r border-gray-700 uppercase tracking-tight">
              Xava
            </h1>
            <h2 className="text-sm ml-5 text-white uppercase tracking-widest">
              Neill van Steenpaal
            </h2>
          </a>
        </Link>
        <ul className="hidden md:flex flex-row mr-5 ml-auto text-white text-sm">
          <li>
            <Link href="/portfolio#tech">
              <a className="mx-8 p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent bg-clip-text">
                <span className="mr-2 text-white font-black">01</span>
                Tech
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio#projects">
              <a className="mx-8 p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent bg-clip-text">
                <span className="mr-2 text-white font-black">02</span>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio#about">
              <a className="mx-8 p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent bg-clip-text">
                <span className="mr-2 text-white font-black">03</span>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio#contact">
              <a className="ml-6 p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent bg-clip-text">
                <span className="mr-2 text-white font-black">04</span>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
