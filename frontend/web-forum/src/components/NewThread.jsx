import React, { useState } from "react";

const NewThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    console.log("Novi thread:", { title, content });

    setTitle("");
    setContent("");
  };

  return (
    <div className="newthr">
      <form onSubmit={handleSubmit}>
        <p>Postavi novi thread</p>

        <input
          type="text"
          className="naslov"
          placeholder="Thread naslov"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="dodaj">
          <textarea
            name="tekst"
            className="threadfield"
            rows="3"
            placeholder="O čemu razmišljaš?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Postavi</button>
        </div>
      </form>
    </div>
  );
};

export default NewThread;