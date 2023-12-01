'use client';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    // Simulate a successful login

    setIsLogged(true);
  };

  const logout = () => {
    // Simulate a logout
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: unknown = () => useContext(AuthContext);
