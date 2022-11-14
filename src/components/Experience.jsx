import React, { useState } from "react";
import "../styles/formStyle.css";

export function Experience(props) {
  const [expState, setExpState] = useState([
    {
      companyName: "Google",
      positionTitle: "CEO",
      tasks: "Run google",
      from: "2010",
      to: "2020",
    },
  ]);
  return (
    <>
      <form className="form experience">
        <h3>Experience</h3>
        <div>
          <input
            name="companyName"
            placeholder="Company name"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="positionTitle"
            placeholder="Position title"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="tasks"
            placeholder="Main tasks of your jobs"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="from"
            placeholder="From"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="to"
            placeholder="To"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </>
  );
}
