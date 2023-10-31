

import { useState, useEffect } from "react";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

export type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
  };

  // Inside types.ts

export function useFetchProps() {
    const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [socials, setSocials] = useState<Social[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        setProjects(await fetchProjects());
        setSocials(await fetchSocials());
        setSkills(await fetchSkills());
        setExperiences(await fetchExperiences());
        setPageInfo(await fetchPageInfo());
      }
  
      fetchData();
    }, []);
  
    return { pageInfo, experiences, skills, projects, socials };
  }
  