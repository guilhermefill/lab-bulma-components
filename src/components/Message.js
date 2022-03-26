import React from "react";
import "bulma/css/bulma.css";
import checkClass from "./checkClass";

const Message = (props) => {
  const allProps = { ...props };
  const classList = `message ${checkClass(allProps)}`;
  return (
    <>
      <article className={classList}>
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.children}</div>
      </article>
    </>
  );
};

export default Message;
