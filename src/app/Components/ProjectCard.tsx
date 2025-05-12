import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly demo: string;
  readonly tools: string;
}

function ProjectCard({
  title,
  description,
  link,
  demo,
  tools,
}: ProjectCardProps) {
  const demoLink =
    demo === "" ? (
      <></>
    ) : (
      <Link className='text-blue-600 dark:text-blue-500 hover:underline 'href={demo} target="_blank">
        Demo
      </Link>
    );

  return (
    <div className='bg-blue-100 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 h-full rounded-md shadow-xl p-4 flex flex-col'>
      <CardMedia
        component="img"
        alt="Project img"
        height="120"
        image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-placeholder.svg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            height: "50px",
            overflowY: "auto",
          }}
        >
          {description}
        </Typography>
        <Typography  variant="overline" >
          {tools}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link} target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline">
          Source Code
        </Link>
        {demoLink}
      </CardActions>
    </div>
  );
}

export default ProjectCard;
