import "../assets/css/Contact.css";

const Contact = () => {

  // const sendData = e => {
  //   e.preventDefault();
  //   const buttonMailto = document.querySelector('#mailto');

  //   let data = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     type: e.target.type.value,
  //     consulta: e.target.consulta.value,
  //   };

  //   const mailtoUrl = `mailto:pabloexample@gmail.com?subject=Contacto Repositorio&body=${encodeURIComponent(`Emisor: ${data.name}\nCorreo Electrónico del emisor: ${data.email}\nTipo: ${data.type}\n\nConsulta: ${data.consulta}`)}`;
    
  //   buttonMailto.setAttribute('href', mailtoUrl);
  //   buttonMailto.click()
  // };

  return (
    <main className="Contact">
      <h1 className="heading">Contacta conmigo</h1>
      {/* onSubmit={sendData} */}
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder="Nombre" autoComplete="off" pattern="[a-zA-Z ]+" required />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" placeholder="Correo electrónico" autoComplete="off" required />
        <label htmlFor="type">Consulta sobre</label>
        <select name="type">
          <option value="Frontend">Desarrollo Frontend</option>
          <option value="Backend">Desarrollo Backend</option>
          <option value="FullStack">Desarrollo FullStack</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Otra">Otra</option>
        </select>
        <label htmlFor="consulta">Consulta a realizar</label>
        <textarea name="consulta" placeholder="Mensaje aquí..." required></textarea>
        <input type="submit" value="Enviar" />      
      </form>
      {/* <a href="mailto:pabloexample@gmail.com" id="mailto" style={{ opacity: "0" }}></a> */}
    </main >
  );
};

export default Contact;