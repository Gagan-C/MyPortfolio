import SkillsView from "./SkillsView";
import { getSkills } from "@/lib/content";

// Server Component: fetches the skill list on the server so it ships in the
// initial HTML (instead of a client-side fetch + loading spinner).
export default async function Skills() {
  const skills = await getSkills();
  return <SkillsView skills={skills} />;
}