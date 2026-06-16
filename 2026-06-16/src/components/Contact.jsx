import { useState } from "react";

// ============================================================
//  🛠️ COMPONENTE COMPLETADO — Contact.jsx
// ============================================================

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("consultoria");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !email || !mensaje) {
      window.alert("Por favor completa los campos obligatorios antes de enviar.");
      return;
    }

    window.alert(`Mensaje enviado. Gracias, ${nombre}! Nos pondremos en contacto por ${email} pronto.`);

    setNombre("");
    setEmail("");
    setTelefono("");
    setServicio("consultoria");
    setMensaje("");
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Estamos listos para ayudarte. Cuéntanos tu proyecto y te responderemos en breve.
          </p>
        </div>

        <div className="row g-5">

          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            <ul className="list-unstyled text-light opacity-85">
              <li className="mb-3">
                <strong>📍 Dirección:</strong>
                <br /> Ciudad, País
              </li>
              <li className="mb-3">
                <strong>📞 Teléfono:</strong>
                <br /> +57 301234 5678
              </li>
              <li className="mb-3">
                <strong>📧 Email:</strong>
                <br /> contacto@empresa.com
              </li>
              <li>
                <strong>🕐 Horario:</strong>
                <br /> domingo a Viernes, 9:00 - 18:00
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      className="form-control"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      className="form-control"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="servicio" className="form-label">Tipo de servicio</label>
                    <select
                      id="servicio"
                      className="form-select"
                      value={servicio}
                      onChange={(e) => setServicio(e.target.value)}
                    >
                      <option value="consultoria">Consultoría</option>
                      <option value="desarrollo">Desarrollo web</option>
                      <option value="diseno">Diseño gráfico</option>
                      <option value="marketing">Marketing digital</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="otro">Otro servicio</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                      id="mensaje"
                      className="form-control"
                      rows="5"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Escribe tu consulta o comentario"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">Enviar mensaje</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
