import React from 'react';

interface CustomChipProps {
  label: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, className = '', style, icon }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${className}`}
      style={style}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span className="whitespace-nowrap">{label}</span>
      <style jsx>{`
        .dark & {
          /* dark-mode specific styles are handled by Tailwind dark: classes on container */
        }
      `}</style>
    </span>
  );
};

export default CustomChip;
