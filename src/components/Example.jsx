import React from "react";
import "../styles/exampleStyle.css";

export function Example(props) {
  console.log(props.education.schoolName);
  return (
    <div className="example-wrapper">
      <div className="general-info">
        <h3>General information</h3>
        <p>Name: {props.generalInfo.firstName}</p>
        <p>Surname: {props.generalInfo.lastName}</p>
        <p>Email: {props.generalInfo.email}</p>
        <p>Phone number: {props.generalInfo.phoneNumber}</p>
      </div>

      <h3>Education</h3>
      {props.education.schoolName !== "" && (
        <div className="card">
          <p>School name: {props.education.schoolName}</p>
        </div>
      )}

      {/* <div className="education-info">
        <h3>Education</h3>
        <div className="card" key="card">
          <p>School name: {props.schoolName}</p>
          <p>Study name: {props.studyName}</p>
          <p>Date from: {props.dateFrom}</p>
          <p>Date to: {props.dateTo}</p>
        </div>

        {props.education.map((school) => {
          <div className="card" key="card">
            <p>School name: {school.schoolName}</p>
            <p>Study name: {school.studyName}</p>
            <p>Date from: {school.dateFrom}</p>
            <p>Date to: {school.dateTo}</p>
          </div>;
        })}
      </div> */}
      {/* <div className="experience-info">
        <h3>Experience</h3>
        <p>Company name: {props.companyName}</p>
        <p>Role: {props.positionTitle}</p>
        <p>Date from: {props.from}</p>
        <p>Date to: {props.to}</p>
      </div> */}
    </div>
  );
}
