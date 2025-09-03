import React from "react";

const Post = () => {
  return (
    <div className="post">
      <h3 className="imekorisnika">Ime Prezime</h3>
      <p id="posttekst">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis
        reiciendis et rem, quia veniam quibusdam possimus maiores neque quam,
        nulla natus quod eum nam animi vel at illum. Vel.
      </p>
      <input type="text" placeholder="Vaš komentar..." />
      <button type="submit">Postuj</button>
    </div>
  );
};

export default Post;
