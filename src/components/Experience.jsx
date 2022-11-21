import React, { useState } from "react";
import "../styles/formStyle.css";

export function Experience(props) {
  const expState = {
    id: "",
    companyName: "",
    positionTitle: "",
    tasks: " ",
    from: "",
    to: "",
  };

  const [state, setState] = useState(expState);

  const randomIdGenerator = () => {
    return Math.floor(Math.random() * 100000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setState({ ...state, [inputName]: inputData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = randomIdGenerator();
    props.setExperience([...props.experience, { ...state, id }]);
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
