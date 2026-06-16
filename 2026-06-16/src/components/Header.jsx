// ============================================================
//  ✅ COMPONENTE ENTREGADO — NO MODIFICAR
//  Header.jsx  (Jumbotron / Hero)
//
//  OBJETIVO DE APRENDIZAJE:
//  Observa cómo se estructuran los datos como un array
//  de objetos y se renderizan con .map() en JSX.
// ============================================================

const estadisticas = [
  { numero: 'te damos', etiqueta: 'actualizacion constante' },
  { numero: 'muchas', etiqueta: 'personas satisfechas' },
  { numero: '60%', etiqueta: 'de ganancias' },
  
];

function Header() {
  return (
    <header id="inicio" className="header-hero">
      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7 text-white py-5">

            <div className="hero-badge mb-3">
              <span>⚡ </span>
            </div>

            <h1 className="hero-titulo display-3 fw-bold mb-3">
              informate con nosotros
              <span className="hero-titulo-acento d-block">
                Por tu seguridad y la de tu bolsillo
              </span>
            </h1>

            <p className="hero-descripcion lead mb-4">
              Te damos la libertad de dar tus propias reseñas sobre los 
               vendedores y de informarte de algunas otras, para brindarte la mayor
               seguridad y calidad de tus compras de cripton monedas .
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#servicios" className="btn btn-voltec btn-lg px-5">
                Ver reseña de compradores 
              </a>
              <a href="#contacto" className="btn btn-outline-light btn-lg px-5">
                Solicitar mas información
              </a>
            </div>

            <div className="row g-3">
              {estadisticas.map((stat, index) => (
                <div key={index} className="col-6 col-sm-3">
                  <div className="stat-card text-center p-3">
                    <div className="stat-numero">{stat.numero}</div>
                    <div className="stat-etiqueta">{stat.etiqueta}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;