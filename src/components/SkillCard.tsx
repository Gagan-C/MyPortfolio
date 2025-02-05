import React from 'react';
import { Card, CardMedia, Chip, Stack } from "@mui/material";

interface SkillCardProps {
  image: string;
  list: { name: string; icon: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ image, list }) => {
  return (
    <Card raised>
      <CardMedia component="img" sx={{ height: 200 }} image={image}></CardMedia>
      <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap">
        {list.map((item, index) => (
          <Chip
            key={index}
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