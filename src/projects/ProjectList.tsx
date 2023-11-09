import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

// function ProjectList({ projects }: ProjectListProps) {
//   return <pre>{JSON.stringify(projects, null, " ")}</pre>;
// }

export default function ProjectList({ projects }: ProjectListProps) {
  const items = projects.map((project) => (
    <div className="cols-sm" key={project.id}>
      <ProjectCard project={project} />
    </div>
  ));

  return <div className="row">{items}</div>;
}

// {
//   "id": 1,
//   "name": "Johnson - Kutch",
//   "description": "Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.",
//   "imageUrl": "/assets/placeimg_500_300_arch4.jpg",
//   "contractTypeId": 3,
//   "contractSignedOn": "2013-08-04T22:39:41.473Z",
//   "budget": 54637,
//   "isActive": false
//  },
