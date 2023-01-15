import "../assets/css/JobsListing.css";
import { jobs } from "../data/jobs";

const JobsListing = ({ limit }) => {
  return (
    <section className="jobs">
      {
        jobs.slice(0, limit).map(job => {
          return (
            <article key={job.id} className="job__item">
              <div className="mask">
                <img src={`/images/${job.id}.png`} alt="Imagen del proyecto" />
              </div>
              <span>{job.categories}</span>
              <h2>
                <a href={`${job.url}`}>
                  {job.name}
                </a>
              </h2>
              <h3>{job.technologies}</h3>
            </article>
          );
        })
      }
    </section>
  );
};

export default JobsListing;