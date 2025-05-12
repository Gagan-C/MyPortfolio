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
      <Link className='text-black dark:text-white 'href={demo} target="_blank">
        Demo
      </Link>
    );

  return (
    <div className='bg-white dark:bg-gray-800 h-12/12 rounded-md shadow-xl p-4 flex flex-col'>
      <CardMedia
      className="bg-white dark:bg-gray-200"
        component="img"
        alt="Project img"
        height="120"
        image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-placeholder.svg"
      />
      <CardContent className="bg-white dark:bg-gray-800">
        <Typography  className="text-black dark:text-white" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="text-black dark:text-white"
          sx={{
            height: "50px",
            overflowY: "auto",
          }}
        >
          {description}
        </Typography>
        <Typography className='"text-black dark:text-white' variant="overline" >
          {tools}
        </Typography>
      </CardContent>
      <CardActions className="bg-white dark:bg-gray-800">
        <Link href={link} target="_blank" className="text-black dark:text-white">
          Source Code
        </Link>
        {demoLink}
      </CardActions>
    </div>
  );
}

export default ProjectCard;
