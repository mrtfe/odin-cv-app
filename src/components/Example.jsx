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
          <p>Study name: {props.education.studyName}</p>
          <p>Date from: {props.education.dateFrom}</p>
          <p>Date to: {props.education.dateTo}</p>
          <button className="del-btn">X</button>
        </div>
      )}
      <h3>Experience</h3>
      {props.experience.companyName !== "" && (
        <div className="card">
          <p>School name: {props.experience.companyName}</p>
          <p>Study name: {props.experience.positionTitle}</p>
          <p>Tasks: {props.experience.tasks}</p>
          <p>Date from: {props.experience.from}</p>
          <p>Date to: {props.experience.to}</p>
          <button className="del-btn">X</button>
        </div>
      )}
    </div>
  );
}
