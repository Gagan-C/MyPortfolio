import React from 'react';
import { Card, CardMedia, Chip, Stack, Typography, Box, CardContent } from "@mui/material";

interface SkillCardProps {
  title: string;
  image: string;
  list: { id: string, name: string; icon: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, image, list }) => {
  return (
    <Card 
      sx={{
        height: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        },
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
      className="dark:bg-gradient-to-br dark:from-gray-800/90 dark:to-gray-700/90 dark:border-gray-600/30"
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia 
          component="img" 
          sx={{ 
            height: 180,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }} 
          image={image}
          alt={`${title} illustration`}
        />
        <Box 
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            color: 'white',
            p: 2,
          }}
        >
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 600,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Stack 
          direction="row" 
          spacing={1} 
          useFlexGap 
          flexWrap="wrap"
          sx={{ gap: 1.5 }}
        >
          {list.map((item, index) => (
            <Chip
              key={item.id}
              label={item.name}
              size="small"
              icon={<i className={`${item.icon} text-sm`} />}
              sx={{ 
                padding: '8px 4px',
                borderRadius: '12px',
                fontWeight: 500,
                fontSize: '0.8rem',
                background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                color: 'white',
                border: 'none',
                transition: 'all 0.2s ease-in-out',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                  background: 'linear-gradient(45deg, #1976D2, #1E88E5)',
                },
                '& .MuiChip-icon': {
                  fontSize: '16px',
                  marginLeft: '8px',
                },
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }
              }}
            />
          ))}
        </Stack>
        {list.length === 0 && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontStyle: 'italic', textAlign: 'center', py: 2 }}
          >
            Skills coming soon...
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillCard;