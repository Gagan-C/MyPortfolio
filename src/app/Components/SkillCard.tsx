import React from 'react';
import { Card, CardMedia, Stack, Typography, Box, CardContent } from "@mui/material";
import CustomChip from './CustomChip';

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

      <CardContent sx={{ p: 3 }} className="bg-white dark:bg-gray-900">
        <Stack 
          direction="row" 
          spacing={1} 
          useFlexGap 
          flexWrap="wrap"
          sx={{ gap: 1.5 }}
        >
          {list.map((item, index) => (
            <CustomChip
              key={item.id}
              label={item.name}
              className={`bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30`}
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }} 
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