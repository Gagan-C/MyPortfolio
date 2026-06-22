import HomeView from "./HomeView";
import { getAboutMe } from "@/lib/content";

// Server Component: fetches the about-me copy on the server so it ships in the
// initial HTML (instead of a client-side fetch + loading spinner).
export default async function Home() {
  const aboutMe = await getAboutMe();
  return <HomeView aboutMe={aboutMe} />;
}