import Head from "next/head";
import Header from "../components/Header";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Professions from "../components/Professions";
import Spacebar from "../components/Spacebar";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio | Xava</title>
        <meta
          name="description"
          content="The portfolio website of Xava | Neill van Steenpaal"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-waves bg-bottom bg-no-repeat bg-contain">
        <div className="snap-y md:h-screen overflow-scroll snap-mandatory">
          <Header />

          <section className="min-h-screen snap-start">
            <Professions />

            <div className="container">
              <Tech />
              <Spacebar />
            </div>
          </section>

          <section className="min-h-screen snap-start">
            <Projects />
          </section>

          <section className="min-h-screen snap-start">
            <About />
          </section>

          <section className="min-h-screen snap-start">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
