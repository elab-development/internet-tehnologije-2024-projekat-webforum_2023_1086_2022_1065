import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

const ThreadExpanded = ({ id, title, body, status, user, category_id, created_at }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // array kategorija po id-u
  const categories = ["Društvo", "Zabava", "Tehnologija", "Obrazovanje", "Igrice"];
  const categoryName = ("[" + categories[category_id - 1] + "]") || "";

  // formatiranje datuma threada
  const formattedDate = new Date(created_at).toLocaleString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/threads/${id}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Greška pri učitavanju komentara:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <div className="feed" data-thread-id={id}>
      <div className="main-post">
        <h3 className="imekorisnika">{user.username}</h3>
        <p id="thread-time">{formattedDate}</p>
        <h3>
          <p id="thread-category">{categoryName}</p>
          {title}
        </h3>
        <p id="posttekst">{body}</p>
        {status == "open" ? <NewComment thread_id={id} /> : <p id="thread-closed">Thread zatvoren!</p>}
      </div>

      <div className="komentari">
        {loading ? (
          <p>Učitavanje komentara...</p>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              thread_id={id}
              body={comment.body}
              created_at={comment.created_at}
              username={comment.user.username}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ThreadExpanded;
