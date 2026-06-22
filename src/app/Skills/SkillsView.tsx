"use client";

import { Grid, Container, Box, Grow } from "@mui/material";
import SkillCard from "../Components/SkillCard";
import type { SkillData } from "@/lib/content";

const BLOB_BASE = "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com";

interface SkillsViewProps {
  readonly skills: SkillData;
}

function SkillsView({ skills }: SkillsViewProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      image: `${BLOB_BASE}/programming-5nhljZWLrVMu3IFmjYOkjVMs2mMNXs.jpeg`,
      list: skills.languages,
      delay: 100
    },
    {
      title: "Databases",
      image: `${BLOB_BASE}/db-DVGUChBoCq2JIodGhj8HErxkO59t8G.jpeg`,
      list: skills.databases,
      delay: 200
    },
    {
      title: "Tools & Technologies",
      image: `${BLOB_BASE}/tools-A9LqWQhbFENV830MPzzR3bEBNEJHtw.jpeg`,
      list: skills.tools,
      delay: 300
    },
    {
      title: "Frameworks & Libraries",
      image: `${BLOB_BASE}/framework-PKiGm9MiMWQSO9Sojb0jokp6e63SqV.jpeg`,
      list: skills.frameworks,
      delay: 400
    }
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} data-testid="skills-component">
          {skillCategories.map((category) => (
            <Grid item xs={12} sm={6} lg={6} key={category.title}>
              <Grow
                in={true}
                timeout={category.delay + 600}
                style={{ transformOrigin: '0 0 0' }}
              >
                <div>
                  <SkillCard
                    title={category.title}
                    image={category.image}
                    list={category.list}
                  />
                </div>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillsView;