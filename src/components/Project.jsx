import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

const Project = () => {

  // const { id, name, url, technologies, categories } = useParams();
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    let project = jobs.filter(job => job.id === params.id);

    setProject(project[0]);
  }, []);

  return (
    <div className="Project">
      <div className="mask" style={{ height: "300px", overflow: "hidden", boxShadow: "0 0 1.25rem #ccc" }}>
        <img src={`/images/${project.id}.png`} alt="Imagen del proyecto" />
      </div>
      <h1 className="heading">Proyecto {project.name}</h1>
      <p>{project.technologies}</p>
      <p>{project.categories}</p>
      <p>
        <a href={`https://${project.url}`} target="_blank" rel="noreferrer">Ir al proyecto</a>
      </p>
    </div>
  );
};

export default Project