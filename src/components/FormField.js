import React from "react";
import "bulma/css/bulma.css";

const FormField = () => {
  return (
    <>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </>
  );
};

export default FormField;
