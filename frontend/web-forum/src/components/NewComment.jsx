import React, { useState } from "react";

const CommentForm = ({ thread_id }) => {
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token || token.trim() === "") {
      alert("Morate biti ulogovani da biste ostavili komentar.");
      return;
    }

    if (body.length < 1 || body.length > 255) {
      alert("Komentar mora imati između 1 i 255 karaktera.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          body,
          thread_id,
        }),
      });

      if (res.ok) {
        alert("Komentar je uspešno postavljen!");
        setBody(""); // reset polja
      } else {
        const data = await res.json();
        alert("Greška: " + (data.message || "Neuspešan zahtev"));
      }
    } catch (err) {
      alert("Došlo je do greške: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id = "comment-submit-form">
      <input
        type="text"
        placeholder="Vaš komentar..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        id="comment-input"
      />
      <button
        type="submit"
        id="comment-submit-button"
      >
        Postavi
      </button>
    </form>
  );
};

export default CommentForm;
