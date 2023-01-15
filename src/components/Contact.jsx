import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <main className="Contact">
      <h1 className="heading">Contacta conmigo</h1>
      <form>
        <label htmlFor="fname">Nombre</label>
        <input type="text" name="fname" placeholder="Nombre" autoComplete="off" required />
        <label htmlFor="surnames">Apellidos</label>
        <input type="text" name="surnames" placeholder="Apellidos" autoComplete="off" required />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" placeholder="Correo electrónico" autoComplete="off" required />
        <label htmlFor="type">Consulta sobre</label>
        <select name="type">
          <option value="frontend">Desarrollo Frontend</option>
          <option value="backend">Desarrollo Backend</option>
          <option value="fullstack">Desarrollo FullStack</option>
          <option value="desing">Diseño Web</option>
          <option value="other">Otra</option>
        </select>
        <label htmlFor="information">Consulta a realizar</label>
        <textarea name="information" placeholder="Mensaje aquí..." required></textarea>
        <input type="submit" value="Enviar" />
        <p>
          Enviame un correo directamente:
          &nbsp;<a href="mailto:pablosuarezbm@gmail.com">📧</a>
        </p>        
      </form>
    </main >
  );
};

export default Contact;