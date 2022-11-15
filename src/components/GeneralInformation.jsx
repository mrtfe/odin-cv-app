import React, { useState } from "react";
import "../styles/formStyle.css";

export function GeneralInformation(props) {
  const formState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const [state, setState] = useState(formState);

  const handleChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setState({ ...state, [inputName]: inputData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setGeneralInfo(state);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>General Information</h3>
        <div>
          <input
            placeholder="First name"
            type="text"
            name="firstName"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Last name"
            type="text"
            name="lastName"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Phone number"
            type="number"
            name="phoneNumber"
            required
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
