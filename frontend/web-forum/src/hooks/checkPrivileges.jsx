import { useMemo } from "react";

export const useAuthCheck = () => {
  return useMemo(() => {
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    const isAuthenticated = !!(token && username && email);
    const isAdmin = role === "admin";
    const isModerator = role === "moderator";
    const hasPrivilegedRole = isAdmin || isModerator;

    return {
      token,
      username,
      email,
      role,
      isAuthenticated,
      isAdmin,
      isModerator,
      hasPrivilegedRole,
    };
  }, []);
};
