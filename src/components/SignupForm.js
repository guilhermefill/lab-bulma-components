import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import FormField from "./FormField";

const SignupForm = () => {
  return (
    <>
      <Navbar />
      <FormField />
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="Password" />
        </div>
      </div>
      <button className="button is-primary">Submit</button>
    </>
  );
};

export default SignupForm;
