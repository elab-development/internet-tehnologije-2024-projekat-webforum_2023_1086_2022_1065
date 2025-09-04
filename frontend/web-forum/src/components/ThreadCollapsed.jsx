import React from "react";

const Thread = ({ id, title, body, status, user, category_id, created_at }) => {
  // array kategorija po id-u
  const categories = ["Društvo", "Zabava", "Tehnologija", "Obrazovanje", "Igrice"];
  const categoryName = ("["+categories[category_id - 1]+"]") || "";


  // formatiranje datuma
  const formattedDate = new Date(created_at).toLocaleString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="post">
      <h3 className="imekorisnika">{user.username}</h3>
      <p id="thread-time">{formattedDate}</p>
      <h3>
        <p id="thread-category">{categoryName}</p>
        {title}
      </h3>
      <p id="posttekst">{body}</p>
      <input type="text" placeholder="Vaš komentar..." />
      <button type="submit">Postavi</button>
    </div>
  );
};

export default Thread;
