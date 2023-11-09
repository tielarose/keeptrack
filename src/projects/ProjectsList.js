import PropTypes from "prop-types";
import { Project } from "./Project";

// export default function ProjectsList({ projects }) {
//   return <pre>{JSON.stringify(projects, null, " ")}</pre>;
// }

export default function ProjectsList({ projects }) {
  return (
    <div className="row">
      {projects.map((project) => (
        <div className="cols-sm" key={project.id}>
          <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget: ${project.budget.toLocaleString()}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

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
