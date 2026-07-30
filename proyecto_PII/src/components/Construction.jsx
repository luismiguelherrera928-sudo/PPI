const modulos = [
  { titulo: 'Menú', descripcion: 'Navegación responsive con acciones rápidas y diseño premium.' },
  { titulo: 'Inicio', descripcion: 'Hero principal con llamada a la acción y estadísticas destacadas.' },
  { titulo: 'Servicios', descripcion: 'Sección de servicios lista para mostrar tu propuesta de valor.' },
  { titulo: 'Contacto', descripcion: 'Formulario preparado para capturar mensajes y enviarlos a Supabase.' },
];

function Construction() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-titulo">Proyecto en construcción</h2>
          <p className="section-subtitulo text-muted">
            La base del sitio ya quedó lista para continuar con el desarrollo del PPI.
          </p>
        </div>

        <div className="row g-4">
          {modulos.map((modulo) => (
            <div key={modulo.titulo} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-warning fw-bold mb-2">🛠️</div>
                  <h5 className="card-title">{modulo.titulo}</h5>
                  <p className="card-text text-muted">{modulo.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Construction;
