// src/pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .catch(() => {
            alert("LOGOUT ERROR");
        })
        .finally(() => {
          localStorage.removeItem("authToken");
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
