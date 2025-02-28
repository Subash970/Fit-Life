export const LogoutApi = () => {
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return {
    Logout,
  };
};
