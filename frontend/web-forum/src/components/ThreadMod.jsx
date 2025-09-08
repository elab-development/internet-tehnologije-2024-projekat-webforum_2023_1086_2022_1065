import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThreadMod({ threadId }) {
  const navigate = useNavigate();

  if (!threadId) {
    return <div>Thread ID nije prosleđen</div>;
  }

  // Pokupi token iz localStorage
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <div>Token nije pronađen, prijavi se</div>;
  }

  // Univerzalna funkcija za API pozive sa Bearer tokenom
  const apiCall = async (method, endpoint, onSuccess) => {
    try {
      const res = await fetch(`http://localhost:8000/api${endpoint}`, {
        method,
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      let data = {};
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        console.log("Status:", res.status, data);
        alert(data.message || "Došlo je do greške");
        return;
      }

      if (onSuccess) onSuccess(data);
    } catch (err) {
      console.error(err);
      alert("Došlo je do greške");
    }
  };

  const handleClose = () => {
    apiCall("PATCH", `/threads/${threadId}/close`, (data) => {
      alert(data.message || "Thread zatvoren");
      navigate("/"); // navigacija na početnu
    });
  };

  const handleDelete = () => {
    if (!window.confirm("Da li sigurno želiš da obrišeš thread?")) return;

    apiCall("DELETE", `/threads/${threadId}`, (data) => {
      alert(data.message || "Thread obrisan");
      navigate("/"); // navigacija na početnu
    });
  };

  return (
    <div style={{ display: "flex", gap: "8px" }} id="mod-tools">
      <button onClick={handleClose}>Zatvori thread</button>
      <button onClick={handleDelete}>Obriši thread</button>
    </div>
  );
}
