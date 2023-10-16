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

type Props = {

  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

};

export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Harsha's Portfolio</title>
    </Head>
    {/*<h1 className="text-blue-800"> Harsha's Portfolio </h1> */}

    {/* Header */}
    <Header socials={socials} />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>

    {/* About */}

    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}

    <section id="experience" className="snap-center">
      <WorkExperience />
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

Home.getInitialProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  };
}
