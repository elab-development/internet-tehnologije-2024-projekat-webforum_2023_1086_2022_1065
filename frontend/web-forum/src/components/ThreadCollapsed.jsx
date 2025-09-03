import React from "react";

const Thread = ({ title, body, status, user, category}) => { // u zagradi je dictionary propova (property valjda???)
  return (
    <div className="post">
      <h3 className="imekorisnika">{user.username}</h3>
      <h3>{title}</h3>
      <p id="posttekst">
        {body}
      </p>
      <input type="text" placeholder="Vaš komentar..." />
      <button type="submit">Postuj</button>
    </div>
  );
};

export default Thread;
