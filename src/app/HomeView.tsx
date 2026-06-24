"use client";

import { Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Components/Socials";
import { contentUrl } from "@/lib/blob";
import type { AboutMe } from "@/lib/content";

interface HomeViewProps {
  readonly aboutMe: AboutMe;
}

function HomeView({ aboutMe }: HomeViewProps) {
  return (
    <div data-testid="home-component" className="home">
      <div className="text-black dark:text-white flex items-center justify-center min-h-screen">
        <div className="banner-text text-5xl items-center justify-center container mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="flex items-center">
              {/* Socials */}
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={12}
                  md={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Image
                          data-testid="profile-pic"
                          src={contentUrl("profile-pic.png")}
                          width={500}
                          height={500}
                          className="rounded-full w-32 h-32 object-cover border-2 border-white shadow-lg mb-1"
                          alt="Gagan Chatu's profile-picture"
                        />
                      </Grid>
                      <Grid item>
                        <Socials/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={10}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid
                      item
                      xs={12}
                      md={11}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <h1 className="responsive-headline pb-3">
                        {aboutMe.body.greeting} {aboutMe.body.heading}
                      </h1>
                      <h3 className="text-xl pt-2 text-justify">
                        {aboutMe.body.description}
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default HomeView;