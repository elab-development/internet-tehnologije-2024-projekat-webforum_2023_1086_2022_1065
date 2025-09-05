import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ThreadExpanded from "../components/ThreadExpanded";
import "../style.css";

const App = () => {
  const { id } = useParams(); // uzimamo id iz rute
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/threads/${id}`);
        const data = await response.json();
        setThread(data);
      } catch (error) {
        console.error("Greska pri ucitavanju threada:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchThread();
    }
  }, [id]);

  return (
    <div className="pozadina">
      <Header />

      <div className="kontent">
        <Navigation />

        {loading ? (
          <p>Učitavanje threada...</p>
        ) : thread ? (
          <ThreadExpanded
            id={thread.id}
            title={thread.title}
            body={thread.body}
            status={thread.status}
            user={thread.user}
            category_id={thread.category_id}
            created_at={thread.created_at}
          />
        ) : (
          <p>Thread nije pronađen.</p>
        )}
      </div>
    </div>
  );
};

export default App;
