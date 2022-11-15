import React, { useState } from "react";
import "../styles/formStyle.css";

export function Experience(props) {
  const expState = [
    {
      companyName: "",
      positionTitle: "",
      tasks: " ",
      from: "",
      to: "",
    },
  ];
  const [state, setState] = useState(expState);

  const handleChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setState({ ...state, [inputName]: inputData });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("experience form submitted");
    props.setExperience(state);
    console.log(props.experience);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form experience">
        <h3>Experience</h3>
        <div>
          <input
            name="companyName"
            placeholder="Company name"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="positionTitle"
            placeholder="Position title"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="tasks"
            placeholder="Main tasks of your jobs"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="from"
            placeholder="From"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="to"
            placeholder="To"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </>
  );
}
