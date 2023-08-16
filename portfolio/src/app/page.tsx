import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/Home.modules.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Harsha's Portfolio</title>
    </Head>
    {/*<h1 className="text-blue-800"> Harsha's Portfolio </h1> */}

    {/* Header */}
    <Header />

    {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero />
    </section>

    {/* About */}

    <section id="About" className="snap-center">
      <About />
    </section>

    {/* Experience */}

    <section id="Experience" className="snap-center">
      <WorkExperience />
    </section>
    
    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}
  </div>
  );
}
