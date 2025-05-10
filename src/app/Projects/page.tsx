'use client'
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";


function Projects() {
  interface Project {
    id: string;
    name: string;
    description: string;
    "project-link": string;
    "project-demo": string;
    tools: string;
  }
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjectData() {
        const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-list.json");
        if (response.ok) {
          const data = await response.json();
          setProjectData(data);
        }
    }
    fetchProjectData();
  }, []);
  return (
    <Grid container spacing={3} padding={4} data-testid="projects-component">
      {projectData.map((card) => (
        <Grid item xs={11} sm={6} md={4} key={card.id}>
          <ProjectCard
            title={card.name}
            description={card.description}
            link={card["project-link"]}
            demo={card["project-demo"]}
            tools={card.tools}
          ></ProjectCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
