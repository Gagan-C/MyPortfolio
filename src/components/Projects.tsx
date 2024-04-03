import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectData from "./project-list.json";

function Projects() {
  return (
    <Grid container spacing={3} borderLeft={30}>
      {projectData.map((card) => (
        <Grid item xs={11} sm={6} md={4}>
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
