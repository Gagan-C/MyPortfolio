import ProjectsView from "./ProjectsView";
import { getProjects } from "@/lib/content";

// Server Component: fetches the project list on the server so it ships in the
// initial HTML (instead of a client-side fetch + loading spinner).
export default async function Projects() {
  const projects = await getProjects();
  return <ProjectsView projects={projects} />;
}