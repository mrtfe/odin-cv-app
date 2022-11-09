import React from "react";
import "../styles/formStyle.css";

export function GeneralInformation(props) {
  return (
    <>
      <form>
        <h3>General Information</h3>
        <div>
          <input
            placeholder="First name"
            type="text"
            id="firstName"
            // required
            onChange={props.handleSubmit}
          ></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input
            placeholder="Last name"
            type="text"
            // required
          ></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            // required
          ></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
        <div>
          <input
            placeholder="Phone number"
            type="number"
            // required
          ></input>
          <button className="btn-submit">Submit</button>
          <button className="btn-edit">Edit</button>
        </div>
      </form>
    </>
  );
}
