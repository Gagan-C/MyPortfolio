import { Grid } from "@mui/material";
import skillsData from "./skill-list.json";
import proImg from "../assets/programming.jpeg";
import dbImg from "../assets/db.jpeg";
import toolImg from "../assets/tools.jpeg";
import frameworkImg from "../assets/framework.jpeg"
import SkillCard from "./SkillCard.tsx";



function Skills() {
  return <Grid container spacing={4} p={2} rowSpacing={2} columnSpacing={2} data-testid="skills-component">
  <Grid item xs={12} sm={6} md={4} >
      <SkillCard image={proImg} list={skillsData.languages.map((language) => language.name)}/>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
      <SkillCard image={dbImg} list={skillsData.databases.map((db) => db.name)}/>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
      <SkillCard image={toolImg} list={skillsData.tools.map((tool) => tool.name)}/>
  </Grid>
  <Grid item xs={12} sm={6} md={4} >
      <SkillCard image={frameworkImg} list={skillsData.frameworks.map((framework) => framework.name)}/>
  </Grid>
</Grid>
}

export default Skills;
