/**
 * Utility functions for the mock server
 * Sin autenticación - usuario admin por defecto (moderador de la red social)
 */


export const formatDate = () => new Date().toISOString();

/**
 * Retorna siempre el usuario admin (sin autenticación real)
 * El admin puede hacer cualquier acción
 */
export const requiresAuth = function (request) {
  // Siempre retorna el primer usuario (admin) sin verificar token
  const users = this.db.users;
  return users[0] || {
    username: "admin",
    firstName: "Admin",
    lastName: "User",
    avatarURL: "",
  };
};
