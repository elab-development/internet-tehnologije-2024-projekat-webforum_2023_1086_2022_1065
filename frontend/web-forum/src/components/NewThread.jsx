import React, { useState } from "react";

const NewThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("1");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    if (!token || token.trim() === "") {
      alert("Morate biti ulogovani da biste postavili thread.");
      return;
    }

    // Validacija dužine
    if (title.trim().length < 5 || title.trim().length > 255) {
      alert("Naslov mora imati između 5 i 255 karaktera.");
      return;
    }

    if (content.trim().length < 10 || content.trim().length > 1024) {
      alert("Tekst threada mora imati između 10 i 1024 karaktera.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          body: content.trim(),
          status: "open",
          category_id: Number(categoryId),
        }),
      });

      if (!response.ok) throw new Error("Greška prilikom kreiranja threada");

      alert("Thread je uspešno postavljen!");
      setTitle("");
      setContent("");
      setCategoryId("1");
    } catch (error) {
      console.error(error);
      alert("Došlo je do greške prilikom postavljanja threada.");
    }
  };

  return (
    <div className="newthr">
      <form onSubmit={handleSubmit}>
        <p>Postavi novi thread</p>
        <p id="izbor-kategorija-label">
          Izaberi temu:
          <select
            name="odabir"
            id="odabir-new"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="1">Društvo</option>
            <option value="2">Zabava</option>
            <option value="3">Tehnologija</option>
            <option value="4">Obrazovanje</option>
            <option value="5">Igrice</option>
          </select>
        </p>

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
