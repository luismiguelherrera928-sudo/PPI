// ============================================================
//  🛠️ COMPONENTE COMPLETADO — WhyUs.jsx
// ============================================================

const razones = [
  {
    icono: '🏆',
    titulo: 'Experiencia certificada',
    descripcion: 'Contamos con años de trayectoria entregando soluciones de alta calidad a empresas de todos los tamaños.',
  },
  {
    icono: '⚡',
    titulo: 'Ejecución rápida',
    descripcion: 'Trabajamos con metodologías ágiles para avanzar rápido sin perder control ni calidad.',
  },
  {
    icono: '🛡️',
    titulo: 'Seguridad garantizada',
    descripcion: 'Implementamos prácticas y herramientas que protegen tu información y tu negocio en todo momento.',
  },
  {
    icono: '🤝',
    titulo: 'Atención personalizada',
    descripcion: 'Acompañamos cada proyecto con asesoría directa y soporte dedicado para que obtengas lo que necesitas.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Equipo de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>
            <p className="text-muted mb-4">
              En VoltTec nos enfocamos en ofrecer soluciones integrales que combinan tecnología, diseño y experiencia para impulsar tu negocio.
              Cada proyecto se trata con responsabilidad, transparencia y compromiso para cumplir tus objetivos.
            </p>
            <p className="text-muted mb-4">
              Nuestro equipo está preparado para ayudarte a crecer con servicios personalizados, soporte confiable y resultados medibles.
              Trabajamos para que tu empresa destaque en un entorno digital competitivo.
            </p>

            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="mb-3">
                  <h5 className="mb-1">
                    <span className="me-2">{razon.icono}</span>
                    {razon.titulo}
                  </h5>
                  <p className="text-muted mb-0">{razon.descripcion}</p>
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
