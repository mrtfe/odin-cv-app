import React, { useState } from "react";
import "../styles/formStyle.css";

export function Education(props) {
  // const [eduState, setEduState] = useState([
  //   {
  //     schoolName: "Codeacademy",
  //     studyName: "Front-end",
  //     dateFrom: "2022-05",
  //     dateTo: "2022-12",
  //   },
  // ]);
  return (
    <>
      <form>
        <h3>Education</h3>
        <div>
          <input
            name="schoolName"
            placeholder="School name"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="studyName"
            placeholder="Title of study"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateFrom"
            placeholder="Date of study / From"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <input
            name="dateTo"
            placeholder="Date of study / To"
            type="text"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </>
  );
}
