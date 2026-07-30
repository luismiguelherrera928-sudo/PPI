import { useState } from 'react';
import { saveContact } from '../lib/supabase';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Instalación residencial',
    mensaje: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await saveContact(formData);
    setStatusMessage(result.message);
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Cuéntanos qué necesitas y te responderemos con una solución a la medida.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-3">📍 Calle 10 # 43A-15, El Poblado, Medellín</li>
              <li className="mb-3">📞 (300) 123-4567</li>
              <li className="mb-3">📧 info@volttec.com.co</li>
              <li className="mb-3">🕐 Lun–Vie 7am–6pm · Sáb 8am–2pm</li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input id="nombre" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input id="telefono" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label">Tipo de servicio</label>
                  <select id="servicio" name="servicio" className="form-select" value={formData.servicio} onChange={handleChange}>
                    <option>Instalación residencial</option>
                    <option>Instalación comercial</option>
                    <option>Mantenimiento preventivo</option>
                    <option>Tableros eléctricos</option>
                    <option>Iluminación LED</option>
                    <option>Planta eléctrica</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="4" className="form-control" value={formData.mensaje} onChange={handleChange} required />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-voltec px-4">Enviar mensaje</button>
                </div>

                {statusMessage ? (
                  <div className="col-12">
                    <div className="alert alert-info mb-0">{statusMessage}</div>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
