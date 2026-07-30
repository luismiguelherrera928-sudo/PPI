import { useState, useEffect } from 'react';
import AuthPanel from './AuthPanel';
import { getCurrentSession, supabase } from '../lib/supabase';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const cargarSesion = async () => {
      const currentSession = await getCurrentSession();
      setSession(currentSession);
    };

    cargarSesion();
    window.addEventListener('scroll', manejarScroll);

    if (!supabase) {
      return () => window.removeEventListener('scroll', manejarScroll);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? 'navbar-scrolled shadow' : 'navbar-transparente'
      }`}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          <span className="logo-icono">💰</span>
          <span className="logo-texto">
            <span className="logo-principal">Bitcoin</span>
            <span className="logo-secundario">Gard</span>
          </span>
        </a>

        <button
          className={`navbar-toggler border-0 ${menuAbierto ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="toggler-icono">{menuAbierto ? '✕' : '☰'}</span>
        </button>

        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#inicio" onClick={cerrarMenu}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#servicios" onClick={cerrarMenu}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contacto" onClick={cerrarMenu}>Contacto</a>
            </li>
            {session ? (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-link-custom" href="#contacto" onClick={cerrarMenu}>Dashboard</a>
                </li>
                <li className="nav-item ms-lg-2">
                  <a className="btn btn-voltec px-4" href="#contacto" onClick={cerrarMenu}>Solicitar soporte</a>
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-2">
                <a className="btn btn-voltec px-4" href="tel:+573001234567" onClick={cerrarMenu}>📞 Llamar ahora</a>
              </li>
            )}
            <li className="nav-item ms-lg-2">
              <AuthPanel session={session} onAuthenticated={(nextSession) => setSession(nextSession)} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
