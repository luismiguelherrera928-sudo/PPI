const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Diseño y montaje de sistemas eléctricos seguros para hogares, apartamentos y proyectos nuevos.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales',
    descripcion: 'Soluciones para oficinas, locales, centros comerciales y espacios con alto consumo eléctrico.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Inspecciones periódicas para prevenir fallas, garantizar continuidad y extender la vida útil.',
  },
  {
    icono: '🔌',
    titulo: 'Tableros y distribución',
    descripcion: 'Montaje y actualización de tableros, protecciones y sistemas de distribución eficientes.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion: 'Implementación de iluminación eficiente, moderna y con ahorro energético comprobable.',
  },
  {
    icono: '🔋',
    titulo: 'Plantas eléctricas',
    descripcion: 'Instalación y mantenimiento de plantas para respaldo y continuidad operativa.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Soluciones eléctricas completas, seguras y adaptadas a cada necesidad del cliente.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio) => (
            <div key={servicio.titulo} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 mb-3">{servicio.icono}</div>
                  <h5 className="card-title fw-bold">{servicio.titulo}</h5>
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
