import React, { useState, useEffect } from "react";
import Thread from "./Thread";

const Feed = ({ brojPostova = 10 }) => {
  const [threadovi, setThreadovi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/threads") // laravel api ruta
      .then((res) => res.json())
      .then((data) => {
        setThreadovi(data.slice(0, brojPostova)); // uzmi samo prvih N postova
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greška pri učitavanju postova:", err);
        setLoading(false);
      });
  }, [brojPostova]);

  if (loading) return <p>Učitavanje...</p>;

  return (
    <div className="feed">
      {threadovi.map((post) => (
        <Thread key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
