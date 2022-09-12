import Head from "next/head";
import Intro from "../components/Intro";
import React from "react";

export default function IntroPage() {
  return (
    <div>
      <Head>
        <title>Intro | Xava</title>
        <meta
          name="description"
          content="This is an introduction to the portfolio of Xava | Neill van Steenpaal"
        />
        <meta httpEquiv="refresh" content="41;url=/portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="bg-stars h-screen w-screen overflow-hidden">
          <Intro />
        </div>
      </main>
    </div>
  );
}
