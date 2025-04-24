import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import proImg from "../assets/programming.jpeg";
import dbImg from "../assets/db.jpeg";
import toolImg from "../assets/tools.jpeg";
import frameworkImg from "../assets/framework.jpeg";
import SkillCard from "./SkillCard.tsx";

function Skills() {
  const [skillsData, setSkillsData] = useState({
    languages: [],
    databases: [],
    tools: [],
    frameworks: [],
  });

  useEffect(() => {
    async function fetchSkillsData() {
      const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/skill-list.json");
      if (response.ok) {
        const data = await response.json();
        setSkillsData(data);
      }
    }
    fetchSkillsData();
  }, []);

  return (
    <Grid container spacing={4} p={2} rowSpacing={2} columnSpacing={2} data-testid="skills-component">
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image={proImg} list={skillsData.languages} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image={dbImg} list={skillsData.databases} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image={toolImg} list={skillsData.tools} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image={frameworkImg} list={skillsData.frameworks} />
      </Grid>
    </Grid>
  );
}

export default Skills;