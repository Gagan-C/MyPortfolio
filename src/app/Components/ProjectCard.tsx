import Image from 'next/image';
import CustomChip from './CustomChip';
import Link from "next/link";
import { FiGithub, FiEye } from "react-icons/fi";

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
        <Image
          alt={`${title} project thumbnail`}
          height={200}
          src="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/project-placeholder.svg"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 text-lg leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '60px' }}>
          {description}
        </p>

        {/* Tech Stack Tags */}
        {toolsArray.length > 0 && (
          <div className="mb-4">
            <div className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-2 text-xs">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-1">
              {toolsArray.map((tool, index) => (
                <CustomChip
                  key={tool}
                  label={tool}
                  className={`bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30`}
                  // use inline style for the staggered animation delay
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 gap-3 flex">
        <Link
          href={link}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm font-medium flex-1 justify-center no-underline"
        >
          <FiGithub size={16} />
          <span>Source Code</span>
        </Link>

        {demo && (
          <Link
            href={demo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200 text-sm font-medium flex-1 justify-center no-underline"
          >
            <FiEye size={16} />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
