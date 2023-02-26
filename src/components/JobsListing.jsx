import { Button, Card } from "react-bootstrap";
import "../assets/css/JobsListing.css";
import { jobs } from "../data/jobs";

const JobsListing = ({ limit }) => {
  return (
    <section className="jobs">
      {
        jobs.slice(0, limit).map(job => {
          return (
            <Card style={{ width: "32rem", margin: "auto" }} key={job.id}>
              <Card.Img  style={{width: "100%"}} variant="top" src={`/portfolio/images/${job.id}.png`} alt={job.name} />
              <Card.Body>
                <p style={{ color: "gray" }}>{job.categories}</p>
                <Card.Title><h1>{job.name}</h1></Card.Title>
                <h3 style={{ color: "gray" }}>{job.technologies}</h3>
                <Button variant="primary">
                  <a href={job.url}>Ver el proyecto</a>
                </Button>
              </Card.Body>
            </Card>
          );
        })
      }
    </section>
  );
};

export default JobsListing;