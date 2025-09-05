import React from "react";
import { useNavigate } from "react-router-dom";
import NewComment from "./NewComment";

const Thread = ({ id, title, body, status, user, category_id, created_at }) => {
  const navigate = useNavigate();

  // array kategorija po id-u
  const categories = ["Društvo", "Zabava", "Tehnologija", "Obrazovanje", "Igrice"];
  const categoryName = ("[" + categories[category_id - 1] + "]") || "";

  // formatiranje datuma
  const formattedDate = new Date(created_at).toLocaleString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div className="post" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3 className="imekorisnika">{user.username}</h3>
      <p id="thread-time">{formattedDate}</p>
      <h3>
        <p id="thread-category">{categoryName}</p>
        {title}
      </h3>
      <p id="posttekst">{body}</p>
      <NewComment thread_id={id} />
    </div>
  );
};

export default Thread;
