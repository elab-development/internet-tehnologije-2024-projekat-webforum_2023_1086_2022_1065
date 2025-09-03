import React, { useState, useEffect } from "react";
import Thread from "./ThreadCollapsed";

const Feed = ({ brojThreadova = 10 }) => {
  const [threadovi, setThreadovi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/threads") // laravel api ruta
      .then((res) => res.json())
      .then((data) => {
        setThreadovi(data.slice(0, brojThreadova)); // uzmi prvi slajs
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greška pri učitavanju postova:", err);
        setLoading(false);
      });
  }, [brojThreadova]);

  if (loading) return <p>Učitavanje...</p>;

  return (
    <div className="feed">
      {threadovi.map((thread) => (
        threadovi.map(thread => <Thread key={thread.id} {...thread} />) // mapira prema id ...thread otpakuje json (videti thread komponentu)
      ))}
    </div>
  );
};

export default Feed;
