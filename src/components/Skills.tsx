import { Card, CardMedia, Chip, Grid, Stack } from "@mui/material";
import skillsData from "./skill-list.json";
import proImg from "../assets/programming.jpeg";
import dbImg from "../assets/db.jpeg";
import toolImg from "../assets/tools.jpeg";
import frameworkImg from "../assets/framework.jpeg"



function Skills() {
  return <Grid container spacing={4} p={2} rowSpacing={2} columnSpacing={2}>
  <Grid item xs={12} sm={6} md={4} >
      <Card raised >
          <CardMedia component="img" sx={{ height: 200 }} image={proImg}></CardMedia>
          <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap" >
              {skillsData.languages.map((language) => (
                  <Chip label={language.name} color="primary" size="small" />
              ))}
          </Stack>
      </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
      <Card raised >
          <CardMedia component="img" sx={{ height: 200 }} image={dbImg}></CardMedia>
          <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap" >
              {skillsData.databases.map((db) => (
                  <Chip label={db.name} color="primary" size="small" />
              ))}
          </Stack>
      </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
      <Card raised>
          <CardMedia component="img" sx={{ height: 200 }} image={toolImg}></CardMedia>
          <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap"  >
              {skillsData.tools.map((tool) => (
                  <Chip  label={tool.name} color="primary" size="small"  />
              ))}
          </Stack>
      </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4} >
      <Card raised >
          <CardMedia component="img" sx={{ height: 200 }} image={frameworkImg}></CardMedia>
          <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap" >
              {skillsData.frameworks.map((framework) => (
                  <Chip label={framework.name} color="primary" size="small" />
              ))}
          </Stack>
      </Card>
  </Grid>
</Grid>
}

export default Skills;
