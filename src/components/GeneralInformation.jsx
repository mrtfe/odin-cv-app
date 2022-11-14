import React, { useState } from "react";
import "../styles/formStyle.css";

export function GeneralInformation(props) {
  const [generalState, setGeneralState] = useState({
    firstName: "Martynas",
    lastName: "Fetingis",
    email: "martynas.f@gmail.com",
    phoneNumber: "112",
  });

  return (
    <>
      <form>
        <h3>General Information</h3>
        <div>
          <input
            placeholder="First name"
            type="text"
            name="firstName"
            // required
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Last name"
            type="text"
            name="lastName"
            // required
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            // required
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            placeholder="Phone number"
            type="number"
            name="phoneNumber"
            // required
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </>
  );
}
