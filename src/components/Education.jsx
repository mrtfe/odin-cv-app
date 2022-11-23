import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/formStyle.css";

export function Education(props) {
  const educationState = {
    schoolName: "",
    studyName: "",
    dateFrom: "",
    dateTo: "",
  };

  const [state, setState] = useState(educationState);

  useEffect(() => {
    const editingData = props.education.find(
      (item) => item.id === props.editableEduState
    );
    if (!editingData) {
      return;
    }
    setState(editingData);
  }, [props.editableEduState, props.education]);

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
    if (props.editableEduState) {
      props.setEducation([state]);
      props.setEditableEduState(null);
      setState(educationState);
    } else {
      const id = randomIdGenerator();
      props.setEducation([...props.education, { ...state, id }]);
      setState(educationState);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Education</h3>
        <div>
          <input
            name="schoolName"
            required
            placeholder="School name"
            type="text"
            value={state.schoolName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="studyName"
            required
            placeholder="Title of study"
            type="text"
            value={state.studyName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateFrom"
            required
            placeholder="Date of study / From"
            type="text"
            value={state.dateFrom}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateTo"
            required
            placeholder="Date of study / To"
            type="text"
            value={state.dateTo}
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
