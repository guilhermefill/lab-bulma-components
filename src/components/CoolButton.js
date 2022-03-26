import React from "react";
import "bulma/css/bulma.css";
import checkClass from "./checkClass";

const CoolButton = (props) => {
  const allProps = { ...props };
  const classList = `button ${checkClass(allProps)}`;
  return <button className={classList}>{allProps.buttonTag}</button>;
};

export default CoolButton;
