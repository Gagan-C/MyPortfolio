import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProjectPlaceholderImage from "../assets/project-placeholder.svg";
import { Link } from "@mui/material";

function ProjectCard({
  title,
  description,
  link,
  demo,
  tools,
}: {
  title: string;
  description: string;
  link: string;
  demo: string;
  tools: string;
}) {
  const demoLink =
    demo === "" ? (
      <></>
    ) : (
      <Link href={demo} target="_blank">
        Demo
      </Link>
    );

  return (
    <Card raised={true} sx={{ height: "100%", width: "100%" }}>
      <CardMedia
        component="img"
        alt="Project img"
        height="130"
        image={ProjectPlaceholderImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "50px",
            overflowY: "auto",
          }}
        >
          {description}
        </Typography>
        <Typography variant="overline" color="text.secondary">
          {tools}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link} target="_blank">
          Source Code
        </Link>
        {demoLink}
      </CardActions>
    </Card>
  );
}
export default ProjectCard;
