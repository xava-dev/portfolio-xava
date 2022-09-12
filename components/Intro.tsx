import styles from "../styles/intro.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  RiSkipForwardMiniFill,
  RiVolumeUpFill,
  RiVolumeMuteFill,
  RiTimerLine,
} from "react-icons/ri";
import { TiArrowShuffle } from "react-icons/ti";
import React, { useState } from "react";

const Intro = () => {
  const [counter, setCounter] = React.useState(40);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const [muted, setMuted] = useState(1);
  function handleToggleMute() {
    muted == 1 ? setMuted((current) => 0) : setMuted((current) => 1);
  }

  return (
    <div className="bg-stars overflow-hidden">
      <div className="text-xs md:text-sm hidden md:flex items-center absolute left-6 top-6 text-gray-500 hover:text-white z-20">
        <button
          onClick={handleToggleMute}
          className="md:ml-6 flex items-center"
        >
          {muted == 1 ? (
            <RiVolumeUpFill className="mr-1" />
          ) : (
            <RiVolumeMuteFill className="mr-1" />
          )}
          {muted == 1 ? "Play theme song" : "Mute"}
        </button>
      </div>

      <div className="hidden md:absolute -z-10">
        <iframe
          width="100"
          height="600"
          src={`https://www.youtube.com/embed/i2Pk_gajCOI?t=2&autoplay=1&mute=${muted}`}
          title="Star Wars Intro (1080p HD) | FREE DOWNLOAD"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-xs md:text-sm flex items-center absolute left-6 md:left-auto md:right-40 top-6 text-gray-500 z-20 flex items-center">
        {counter == 0 ? (
          <TiArrowShuffle className="mr-1" />
        ) : (
          <RiTimerLine className="mr-1" />
        )}
        {counter == 0 ? "Redirecting to portfolio..." : counter}
        {counter == 1 ? " second" : ""}
        {counter > 1 ? " seconds" : ""}
      </div>

      <Link href="/portfolio">
        <a className="text-xs md:text-sm flex items-center absolute right-6 md:right-12 top-6 text-gray-500 hover:text-white z-20">
          <RiSkipForwardMiniFill width={20} height={40} className="mr-1" />
          Skip intro
        </a>
      </Link>
      <section className="w-full h-full text-2xl md:text-4xl whitespace-nowrap xl:text-6xl text-teal-400">
        <div className={styles.intro}>
          A long time ago, in a galaxy far,
          <br /> far away....
        </div>
      </section>

      <section className="relative w-screen h-screen">
        <Image
          alt="xava star wars logo"
          src="/intro/xava-intro.png"
          layout={"fill"}
          objectFit={"contain"}
          className={styles.logo}
        />
      </section>

      <div id={styles.board} className="inset-x-0">
        <div
          id={styles.content}
          className="text-yellow-300 text-2xl md:text-5xl max-h-screen inset-x-0"
        >
          <p id={styles.title} className="text-center">
            Episode IX
          </p>
          <p
            className="font-black text-2xl md:text-6xl mt-2 md:mt-10 text-center"
            id={styles.subtitle}
          >
            THE RISE OF XAVA
          </p>
          <br />
          <p className={styles.text}>
            With the end of the GALACTIC EMPIRE, a young padawan starts his
            journey to become a master in his trade.
          </p>
          <br />
          <p className={styles.text}>
            He is searching across the vast galaxy for a Jedi Master to teach
            him the ways so that he, too, becomes a Jedi Master himself.
          </p>
          <br />
          <p className={styles.text}>
            His quest starts in Oslo on the small planet of Earth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
