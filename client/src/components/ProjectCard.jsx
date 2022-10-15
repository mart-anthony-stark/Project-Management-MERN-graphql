const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <a className="btn btn-light" href={`/projects/${project.id}`}>
              View
            </a>
          </div>

          <div className="small">
            Status: <strong>{project.status}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
