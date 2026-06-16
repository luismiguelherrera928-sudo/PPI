// ============================================================
//  🛠️ COMPONENTE COMPLETADO — Services.jsx
// ============================================================

const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Montamos y actualizamos instalaciones eléctricas seguras y eficientes para tu hogar.',
  },
  {
    icono: '🌐',
    titulo: 'Desarrollo web',
    descripcion: 'Creamos sitios modernos, responsivos y optimizados para una experiencia digital profesional.',
  },
  {
    icono: '🎨',
    titulo: 'Diseño gráfico',
    descripcion: 'Desarrollamos identidades visuales, piezas publicitarias y materiales de marca impactantes.',
  },
  {
    icono: '📈',
    titulo: 'Marketing digital',
    descripcion: 'Estrategias de publicidad online para aumentar tu visibilidad y atraer clientes potenciales.',
  },
  {
    icono: '🛠️',
    titulo: 'Soporte técnico',
    descripcion: 'Asistencia especializada para resolver problemas y mantener operativas tus herramientas digitales.',
  },
  {
    icono: '🔒',
    titulo: 'Seguridad informática',
    descripcion: 'Implementamos medidas de seguridad para proteger tus datos y prevenir riesgos en línea.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Descubre cómo apoyamos a empresas y proyectos con soluciones integrales, creativas y confiables.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 mb-3">{servicio.icono}</div>
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
