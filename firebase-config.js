
export const firebaseConfig = {
  apiKey: "AIzaSyDCFcUfoMnKR9r8ipmS9_UrCho_AVh13Z4",
  authDomain: "viagem-316c8.firebaseapp.com",
  projectId: "viagem-316c8",
  storageBucket: "viagem-316c8.firebasestorage.app",
  messagingSenderId: "553111639339",
  appId: "1:553111639339:web:3b9f44f716bca0cbc3e16e"
};

// Detecta automaticamente se você já preencheu a config.
export const firebaseAtivo = !firebaseConfig.apiKey.startsWith("SUA_");
