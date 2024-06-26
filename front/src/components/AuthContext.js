// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const AuthContext = createContext();

// Proveedor del contexto
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth, AuthContext };
