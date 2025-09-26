'use client'
import { useEffect, useState } from "react";
import { Grid, Container, Typography, Box, Fade, Grow } from "@mui/material";
import SkillCard from "../Components/SkillCard";
import Loading from "../Components/Loading";

function Skills() {
  const [skillsData, setSkillsData] = useState({
    languages: [],
    databases: [],
    tools: [],
    frameworks: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkillsData() {
      try {
        const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/skill-list.json");
        if (response.ok) {
          const data = await response.json();
          setSkillsData(data);
        }
      } catch (error) {
        console.error("Failed to fetch skills data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSkillsData();
  }, []);

  if (loading) {
    return (
      <div data-testid="skills-component-loading" className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      image: "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/programming-5nhljZWLrVMu3IFmjYOkjVMs2mMNXs.jpeg",
      list: skillsData.languages,
      delay: 100
    },
    {
      title: "Databases",
      image: "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/db-DVGUChBoCq2JIodGhj8HErxkO59t8G.jpeg",
      list: skillsData.databases,
      delay: 200
    },
    {
      title: "Tools & Technologies",
      image: "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/tools-A9LqWQhbFENV830MPzzR3bEBNEJHtw.jpeg",
      list: skillsData.tools,
      delay: 300
    },
    {
      title: "Frameworks & Libraries",
      image: "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/framework-PKiGm9MiMWQSO9Sojb0jokp6e63SqV.jpeg",
      list: skillsData.frameworks,
      delay: 400
    }
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} data-testid="skills-component">
          {skillCategories.map((category, index) => (
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

export default Skills;