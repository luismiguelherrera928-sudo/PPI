const razones = [
  { icono: '🏆', titulo: 'Experiencia certificada', descripcion: 'Más de 15 años ejecutando proyectos eléctricos con altos estándares de calidad.' },
  { icono: '🧠', titulo: 'Enfoque técnico', descripcion: 'Analizamos cada necesidad para proponer soluciones eficientes y seguras.' },
  { icono: '🤝', titulo: 'Atención cercana', descripcion: 'Brindamos acompañamiento personalizado desde la cotización hasta la ejecución.' },
  { icono: '⚙️', titulo: 'Innovación constante', descripcion: 'Implementamos tecnologías modernas para mejorar el rendimiento y el ahorro energético.' },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="VoltTec"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>
            <p className="text-muted mb-4">
              VoltTec es una empresa dedicada a ofrecer soluciones eléctricas seguras, eficientes y confiables para hogares y negocios.
            </p>
            <p className="text-muted mb-4">
              Nuestro equipo combina experiencia técnica, cumplimiento normativo y un alto compromiso con la satisfacción del cliente.
            </p>

            <ul className="list-unstyled">
              {razones.map((razon) => (
                <li key={razon.titulo} className="d-flex gap-3 mb-3">
                  <div className="fs-4">{razon.icono}</div>
                  <div>
                    <h6 className="fw-bold mb-1">{razon.titulo}</h6>
                    <p className="text-muted mb-0">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
