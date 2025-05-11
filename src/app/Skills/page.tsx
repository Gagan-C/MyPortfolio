'use client'
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SkillCard from "../Components/SkillCard";
import Loading from "../Components/Loading";

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
  if(!skillsData) {
    return <div data-testid="skills-component-loading"><Loading/></div>;
  }

  return (
    <Grid container spacing={4} p={2} rowSpacing={2} columnSpacing={2} data-testid="skills-component">
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/programming-5nhljZWLrVMu3IFmjYOkjVMs2mMNXs.jpeg" list={skillsData.languages} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/db-DVGUChBoCq2JIodGhj8HErxkO59t8G.jpeg" list={skillsData.databases} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/tools-A9LqWQhbFENV830MPzzR3bEBNEJHtw.jpeg" list={skillsData.tools} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkillCard image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/framework-PKiGm9MiMWQSO9Sojb0jokp6e63SqV.jpeg" list={skillsData.frameworks} />
      </Grid>
    </Grid>
  );
}

export default Skills;