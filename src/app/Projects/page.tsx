'use client'
import { useEffect, useState } from "react";
import { Grid, Container, Box, Grow } from "@mui/material";
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
    delay: number;
  }

  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjectData() {
      try {
        const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-list.json");
        if (response.ok) {
          const data = (await response.json()) as Omit<Project, 'delay'>[];
          let delayVal = 100;
          const withDelay: Project[] = data.map(item => {
            const proj: Project = { ...item, delay: delayVal };
            delayVal += 100;
            return proj;
          });
          setProjectData(withDelay);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjectData();
  }, []);

  if (loading) {
    return (
      <div data-testid="projects-component-loading" className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6} data-testid="projects-component" justifyContent="center">
          {projectData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
              <Grow
                in={true}
                timeout={(card.delay) + 600}
                style={{ transformOrigin: '0 0 0' }}
              >
                <div>
                  <ProjectCard
                    title={card.name}
                    description={card.description}
                    link={card["project-link"]}
                    demo={card["project-demo"]}
                    tools={card.tools}
                  />
                </div>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
