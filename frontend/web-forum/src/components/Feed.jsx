import React, { useState, useEffect } from "react";
import Thread from "./ThreadCollapsed";
import NewThread from "./NewThread";
import Pagination from "./Pagination";

const Feed = ({ brojThreadova = 5, filters = { category: "", searchText: "", isOpen: null } }) => {
  // fallback vrednosti
  const {
    category = "",
    searchText = "",
    isOpen = null
  } = filters;

  const [threadovi, setThreadovi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.category) params.append("category_id", filters.category);
    if (filters.searchText) params.append("q", filters.searchText);
    if (filters.isOpen !== null) {
      params.append("status", filters.isOpen ? "open" : "closed");
    }

    const url = params.toString()
      ? `http://localhost:8000/api/threads/search?${params.toString()}`
      : "http://localhost:8000/api/threads";

    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setThreadovi(data);
        setLoading(false);
        setCurrentPage(1);
      })
      .catch(err => {
        console.error("Greška pri učitavanju postova:", err);
        setLoading(false);
      });
  }, [filters.category, filters.searchText, filters.isOpen]); // zavisi samo od vrednosti



  if (loading) return <p>Učitavanje...</p>;

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
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Feed;
