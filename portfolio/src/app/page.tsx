"use client";

import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/Home.modules.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { GetStaticProps } from 'next';
import { fetchExperiences } from "../../utils/fetchExperiences";
import {fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProjects} from "../../utils/fetchProjects";
import {  fetchSkills} from "../../utils/fetchSkills";
import {fetchSocials } from "../../utils/fetchSocials";
import { Experience, PageInfo, Skill, Project, Social} from "../../typings";
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

type Props = {

  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

};


export default function Home(props: Props){

const [pageInfo, setPageInfo] = useState<PageInfo>(props.pageInfo);
const [experiences, setExperiences] = useState<Experience[]>(props.experiences);
const [skills, setSkills] = useState<Skill[]>(props.skills);
const [projects, setProjects] = useState<Project[]>(props.projects);
const [socials, setSocials] = useState<Social[]>(props.socials);

  useEffect(() => {
    async function fetchData() {
      if (!projects || projects.length === 0) setProjects(await fetchProjects());
      if (!socials || socials.length === 0) setSocials(await fetchSocials());
      if (!skills || skills.length === 0) setSkills(await fetchSkills());
      if (!experiences || experiences.length === 0) setExperiences(await fetchExperiences());
      if (!pageInfo || Object.keys(pageInfo).length === 0) setPageInfo(await fetchPageInfo());
      
    }
    
    fetchData();
  }, []);  // Notice the empty dependency array

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Portfolio</title>
    </Head>
    {/*<h1 className="text-blue-800"> Harsha's Portfolio </h1> */}

    {/* Header */}
    
    <Header socials={socials} />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero pageInfo={pageInfo}/>
    </section>

    {/* About */}

    <section id="about" className="snap-center">
      <About pageInfo={pageInfo} />
    </section>

    {/* Experience */}

    <section id="experience" className="snap-center">
      <WorkExperience experiences={experiences} />
    </section>

    {/* Skills */}

    <section id="skills" className="snap-start">
      <Skills skills ={skills} />

    </section>

    {/* Projects */}

    <section id="projects" className="snap-center">
      <Projects projects ={projects} />
      
    </section>

    {/* Contact Me */}

    <section id="contact" className="snap-center">
      <ContactMe />
    </section>

  </div>
  );
}

