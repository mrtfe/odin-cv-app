import React from "react";
import "../styles/exampleStyle.css";

export function Example(props) {
  // console.log("props.education:" + props.education);
  return (
    <div className="example-wrapper">
      <div className="general-info">
        <h3>General information</h3>
        <p>Name: {props.firstName}</p>
        <p>Surname: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Phone number: {props.phoneNumber}</p>
      </div>
      <div className="education-info">
        <h3>Education</h3>
        <div className="card" key="card">
          <p>School name: {props.schoolName}</p>
          <p>Study name: {props.studyName}</p>
          <p>Date from: {props.dateFrom}</p>
          <p>Date to: {props.dateTo}</p>
        </div>

        {/* {props.education.map((school) => {
          <div className="card" key="card">
            <p>School name: {school.schoolName}</p>
            <p>Study name: {school.studyName}</p>
            <p>Date from: {school.dateFrom}</p>
            <p>Date to: {school.dateTo}</p>
          </div>;
        })} */}
      </div>
      <div className="experience-info">
        <h3>Experience</h3>
        <p>Company name: {props.companyName}</p>
        <p>Role: {props.positionTitle}</p>
        <p>Date from: {props.from}</p>
        <p>Date to: {props.to}</p>
      </div>
    </div>
  );
}
