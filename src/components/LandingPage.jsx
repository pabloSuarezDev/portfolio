import "../assets/css/LandingPage.css";
import { Link } from "react-router-dom";
import JobsListing from "./JobsListing";
import { ListGroup } from "react-bootstrap";
import { hover } from "@testing-library/user-event/dist/hover";

const LandingPage = () => {
  return (
    <main className="LandingPage">
      <h1 className="heading">
        Bienvenido, mi nombre es <strong>Pablo Suárez</strong>,
        soy <strong>Desarrollador Web</strong> y <strong>Técnico en Sistemas Microinformáticos y Redes</strong>,
        ofrezco mis servicios de <strong>programación</strong>, <strong>desarrollo</strong> e <strong>informática</strong> en
        todo tipo de proyectos.
      </h1>
      <span id="help__you">
        Te ayudo a crear tu sitio o aplicación web, realizar cualquier tipo de instalación,
        reparación o mantenimiento tanto de hardware, software y Redes.
      </span>
      <p id="contact__with--me"><Link to="/contacto">Contacta conmigo</Link></p>
      <section className="my__projects">
        <h2>Tecnologías que implemento en el Desarrollo Web.</h2>
        <ul className="tech__list">
          <li>
            <h3>Frontend</h3>
            <ListGroup>
              <ListGroup.Item className="border">HTML5</ListGroup.Item>
              <ListGroup.Item className="border">CSS3, SASS, BOOTSTRAP5</ListGroup.Item>
              <ListGroup.Item className="padding">JavaScript, React, TypeScript, jQuery</ListGroup.Item>
            </ListGroup>
          </li>
          <br />
          <li>
            <h3>Backend</h3>
            <ListGroup>
              <ListGroup.Item className="border">Node, Express, PHP (POO, MVC), Laravel</ListGroup.Item>
              <ListGroup.Item className="padding">MongoDB, MySQL/MariaDB, SQL</ListGroup.Item>
            </ListGroup>
          </li>
          <br />
          <li>
            <h3>Gestores de contenido</h3>
            <ListGroup>
              <ListGroup.Item className="border">WordPress</ListGroup.Item>
            </ListGroup>
          </li>
        </ul>
        <h2 className="landing__projects">
          Aquí podras encontrar un par de <strong>proyectos</strong>, para ver más clica 
            <Link to="/proyectos" className="btn" style={{ color: "#fa4529" }}>aquí</Link>.
        </h2>
        <JobsListing limit={2} />
      </section>
    </main>
  );
};

export default LandingPage;