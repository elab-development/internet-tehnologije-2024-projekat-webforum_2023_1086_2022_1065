import React from "react";
import Post from "./Post";

const Feed = ({ brojPostova = 3 }) => {
  // placeholder resenje
  const postovi = Array.from({ length: brojPostova });

  return (
    <div className="feed">
      {postovi.map((_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default Feed;
