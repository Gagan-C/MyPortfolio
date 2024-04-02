
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectPlaceholderImage from "../assets/project-placeholder.svg";
import { Link } from '@mui/material';

function ProjectCard(){
    return (
        <Card raised={true} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Project img"
            height="140"
            image={ProjectPlaceholderImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            DLT Simulation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              a c++ based simulation.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/Gagan-C/DLT-Simulation" target="_blank">github</Link>
            <Link href="https://github.com/Gagan-C/DLT-Simulation" target="_blank">demo</Link>
          </CardActions>
        </Card>
      );
}
export default ProjectCard


