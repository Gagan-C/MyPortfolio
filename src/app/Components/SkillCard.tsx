import React from 'react';
import { Card, CardMedia, Chip, Stack } from "@mui/material";

interface SkillCardProps {
  image: string;
  list: { id:string, name: string; icon: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ image, list }) => {
  return (
    <Card raised>
      <CardMedia component="img" sx={{ height: 200 }} image={image}></CardMedia>
      <Stack direction={"row"} className='bg-white dark:bg-gray-800 shadow-xl' spacing={1} p={2} useFlexGap flexWrap="wrap">
        {list.map((item) => (
          <Chip
            key={item.id}
            label={item.name}
            color="primary"
            size="small"
            icon={<i className={`${item.icon}`} />}
            sx={{ padding: '0.5rem' }}
          />
        ))}
      </Stack>
    </Card>
  );
};

export default SkillCard;