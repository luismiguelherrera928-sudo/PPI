import { useState } from 'react';
import { signInWithEmailPassword, signUpWithEmailPassword, signOutUser } from '../lib/supabase';

function AuthPanel({ session, onAuthenticated }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const result = mode === 'login'
      ? await signInWithEmailPassword(email, password)
      : await signUpWithEmailPassword(email, password);

    setMessage(result.message);
    setLoading(false);

    if (result.success) {
      onAuthenticated?.(result.session || null);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    const result = await signOutUser();
    setLoading(false);
    setMessage(result.message);
    onAuthenticated?.(null);
  };

  if (session) {
    return (
      <div className="d-flex align-items-center gap-2">
        <span className="text-white small">Hola, {session.user?.email || 'usuario'}</span>
        <button className="btn btn-outline-light btn-sm" onClick={handleSignOut} disabled={loading}>
          {loading ? 'Cerrando...' : 'Cerrar sesión'}
        </button>
      </div>
    );
  }

  return (
    <form className="d-flex flex-column flex-lg-row align-items-lg-center gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control form-control-sm"
        placeholder="Correo"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="password"
        className="form-control form-control-sm"
        placeholder="Contraseña"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit" className="btn btn-voltec btn-sm" disabled={loading}>
        {loading ? 'Procesando...' : mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}
      </button>
      <button
        type="button"
        className="btn btn-outline-light btn-sm"
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      >
        {mode === 'login' ? 'Crear cuenta' : 'Ya tengo cuenta'}
      </button>
      {message ? <span className="text-white small">{message}</span> : null}
    </form>
  );
}

export default AuthPanel;
