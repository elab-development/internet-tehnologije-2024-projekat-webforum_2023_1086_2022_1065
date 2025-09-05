import React from "react";

const Comment = ({ thread_id, body, created_at, username }) => {
  // format datuma
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }) + " " + date.toLocaleTimeString("sr-RS", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="post" data-thread-id={thread_id}>
      <h3 className="imekorisnika">{username}</h3>
      <p id="komentar-datum">{formatDate(created_at)}</p>
      <p id="posttekst">{body}</p>
    </div>
  );
};

export default Comment;