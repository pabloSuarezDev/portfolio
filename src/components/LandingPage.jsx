import "../assets/css/LandingPage.css";
import { Link } from "react-router-dom";
import JobsListing from "./JobsListing";

const LandingPage = () => {
  return (
    <main className="LandingPage">
      <h1 className="heading">
        Bienvenido, mi nombre es <strong>Pablo Suárez</strong>, 
        soy <strong>Desarrollador Web</strong> y <strong>Técnico en Sistemas microinformáticos y Redes</strong>,
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
            <ul>
              <li>HTML5</li>
              <li>CSS3, SASS, BOOTSTRAP5</li>
              <li>JavaScript, React, TypeScript, jQuery</li>
            </ul>
          </li>
          <li>
            <h3>Backend</h3>
            <ul>
              <li>Node, Express, PHP (POO, MVC), Laravel</li>
              <li>MongoDB, MySQL/MariaDB, SQL</li>
            </ul>
          </li>
        </ul>
        <h2>
          Aquí podras encontrar tanto proyectos de <strong>Masters/Cursos</strong> 
          &nbsp;como <strong>proyectos personales</strong>.
        </h2>
        <JobsListing limit={2} />
      </section>
    </main>
  );
};

export default LandingPage;