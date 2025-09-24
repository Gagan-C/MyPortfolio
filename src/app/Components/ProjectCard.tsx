import { CardActions, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";

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
  const toolsArray = tools.split(',').map(tool => tool.trim()).filter(Boolean);

  return (
    <div className='group bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 h-full rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden'>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <CardMedia
          component="img"
          alt={`${title} project thumbnail`}
          height="200"
          image="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-placeholder.svg"
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          sx={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <CardContent className="p-6 flex-1 flex flex-col">
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h3"
          className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2"
          sx={{ fontSize: '1.25rem', lineHeight: 1.3 }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body2"
          className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '60px'
          }}
        >
          {description}
        </Typography>

        {/* Tech Stack Tags */}
        {toolsArray.length > 0 && (
          <Box className="mb-4">
            <Typography variant="caption" className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-2 block">
              Tech Stack
            </Typography>
            <Box className="flex flex-wrap gap-1">
              {toolsArray.slice(0, 4).map((tool, index) => (
                <Chip
                  key={index}
                  label={tool}
                  size="small"
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  sx={{ 
                    fontSize: '0.75rem',
                    height: '24px',
                    '& .MuiChip-label': { px: 1.5 }
                  }}
                />
              ))}
              {toolsArray.length > 4 && (
                <Chip
                  label={`+${toolsArray.length - 4}`}
                  size="small"
                  className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  sx={{ 
                    fontSize: '0.75rem',
                    height: '24px',
                    '& .MuiChip-label': { px: 1.5 }
                  }}
                />
              )}
            </Box>
          </Box>
        )}
      </CardContent>

      {/* Action Buttons */}
      <CardActions className="p-6 pt-0 gap-3">
        <Link 
          href={link} 
          target="_blank" 
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm font-medium flex-1 justify-center no-underline"
        >
          <FiGithub size={16} />
          Source Code
        </Link>
        
        {demo && (
          <Link 
            href={demo} 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200 text-sm font-medium flex-1 justify-center no-underline"
          >
            <FiEye size={16} />
            Live Demo
          </Link>
        )}
      </CardActions>
    </div>
  );
}

export default ProjectCard;
