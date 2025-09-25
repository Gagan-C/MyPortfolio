'use client'
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import Loading from "../Components/Loading";


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
  if(!projectData) {
    return <div data-testid="projects-component-loading"><Loading/></div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Grid container spacing={3} data-testid="projects-component" justifyContent="center">
        {projectData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={card.id}>
            <ProjectCard
              title={card.name}
              description={card.description}
              link={card["project-link"]}
              demo={card["project-demo"]}
              tools={card.tools}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
