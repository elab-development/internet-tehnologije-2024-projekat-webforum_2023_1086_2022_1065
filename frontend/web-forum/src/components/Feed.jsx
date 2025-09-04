import React, { useState, useEffect } from "react";
import Thread from "./ThreadCollapsed";
import NewThread from "./NewThread";
import Pagination from "./Pagination";

const Feed = ({ brojThreadova = 5 }) => {
  const [threadovi, setThreadovi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // novi state za stranicu

  useEffect(() => {
    fetch("http://localhost:8000/api/threads")
      .then(res => res.json())
      .then(data => {
        setThreadovi(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Greška pri učitavanju postova:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Učitavanje...</p>;

  // resolve slice
  const startIndex = (currentPage - 1) * brojThreadova;
  const endIndex = startIndex + brojThreadova;
  const pagedThreads = threadovi.slice(startIndex, endIndex);

  return (
    <div className="feed">
      <NewThread />
      <div className="postovi">
        {pagedThreads.map(thread => (
          <Thread key={thread.id} {...thread} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalCount={threadovi.length} 
        pageSize={brojThreadova}
        onPageChange={setCurrentPage} // callback kad se klikne nova stranica
      />
    </div>
  );
};

export default Feed;
