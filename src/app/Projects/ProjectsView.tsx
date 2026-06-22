"use client";

import { Grid, Container, Box, Grow } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import type { Project } from "@/lib/content";

interface ProjectsViewProps {
  readonly projects: Project[];
}

function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6} data-testid="projects-component" justifyContent="center">
          {projects.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
              <Grow
                in={true}
                timeout={(index + 1) * 100 + 600}
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

export default ProjectsView;