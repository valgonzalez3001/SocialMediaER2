import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

/**
 * Provider para el usuario administrador
 * Crea un usuario admin por defecto que tiene permisos para eliminar cualquier contenido
 */
export const AdminProvider = ({ children }) => {
  // Usuario admin por defecto
  const [admin] = useState({
    username: "admin",
    firstName: "Admin",
    lastName: "User",
    isAdmin: true,
  });

  return (
    <AdminContext.Provider value={{ admin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
