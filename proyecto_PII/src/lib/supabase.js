import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://tu-proyecto.supabase.co'
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function saveContact(formData) {
  if (!supabase) {
    return {
      success: false,
      message: 'Configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el archivo .env para guardar mensajes.',
    };
  }

  const { error } = await supabase.from('contactos').insert([{ ...formData }]);

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: 'Mensaje enviado correctamente a Supabase.' };
}

export async function signInWithEmailPassword(email, password) {
  if (!supabase) {
    return { success: false, message: 'No hay conexión con Supabase. Revisa tus variables de entorno.', session: null };
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, message: error.message, session: null };
  }

  return { success: true, message: 'Sesión iniciada correctamente.', session: data.session };
}

export async function signUpWithEmailPassword(email, password) {
  if (!supabase) {
    return { success: false, message: 'No hay conexión con Supabase. Revisa tus variables de entorno.', session: null };
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { success: false, message: error.message, session: null };
  }

  return { success: true, message: 'Registro realizado correctamente. Revisa tu correo para confirmar.', session: data.session };
}

export async function signOutUser() {
  if (!supabase) {
    return { success: false, message: 'No hay conexión con Supabase.' };
  }

  const { error } = await supabase.auth.signOut();
  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: 'Sesión cerrada.' };
}

export async function getCurrentSession() {
  if (!supabase) {
    return null;
  }

  const { data } = await supabase.auth.getSession();
  return data.session;
}
