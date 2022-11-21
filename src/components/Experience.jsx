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
    setState(expState);
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
            required
            value={state.companyName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="positionTitle"
            placeholder="Position title"
            type="text"
            required
            value={state.positionTitle}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="tasks"
            placeholder="Main tasks"
            type="text"
            required
            value={state.tasks}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="from"
            placeholder="From"
            type="text"
            required
            value={state.from}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="to"
            placeholder="To"
            type="text"
            required
            value={state.to}
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
