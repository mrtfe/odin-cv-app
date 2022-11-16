import React, { useState } from "react";
import "../styles/formStyle.css";

export function Education(props) {
  const educationState = {
    id: "",
    schoolName: "",
    studyName: "",
    dateFrom: "",
    dateTo: "",
  };
  const [state, setState] = useState(educationState);

  const RandomIdGenerator = () => {
    console.log("random id generated");
    return Math.floor(Math.random() * 1000000000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputData = e.target.value;
    setState({ ...state, [inputName]: inputData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setEducation([...props.education, state]);
    // console.log(props.education);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Education</h3>
        <div>
          <input
            name="schoolName"
            placeholder="School name"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="studyName"
            placeholder="Title of study"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateFrom"
            placeholder="Date of study / From"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateTo"
            placeholder="Date of study / To"
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
