"use client";

import Head from 'next/head'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useFetchProps } from '../types';


export default function Home(){

  const { pageInfo, experiences, skills, projects, socials } = useFetchProps();


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Portfolio</title>
    </Head>
    {/*<h1 className="text-blue-800"> Harsha's Portfolio </h1> */}

    {/* Header */}
    
    <Header />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero/>
    </section>

    {/* About */}

    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}

    <section id="experience" className="snap-center">
      <WorkExperience/>
    </section>

    {/* Skills */}

    <section id="skills" className="snap-start">
      <Skills />

    </section>

    {/* Projects */}

    <section id="projects" className="snap-center">
      <Projects />
      
    </section>

    {/* Contact Me */}

    <section id="contact" className="snap-center">
      <ContactMe />
    </section>

  </div>
  );
}

