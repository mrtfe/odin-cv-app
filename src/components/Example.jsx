import React from "react";
import "../styles/exampleStyle.css";

export function Example(props) {
  return (
    <div className="example-wrapper">
      <div className="general-info">
        <h3>General information</h3>
        <p>Name: {props.generalInfo.firstName}</p>
        <p>Surname: {props.generalInfo.lastName}</p>
        <p>Email: {props.generalInfo.email}</p>
        <p>Phone number: {props.generalInfo.phoneNumber}</p>
      </div>
      <div className="right-side">
        <h3>Education</h3>
        {props.education.map((eduItem, index) => (
          <div key={index} className="card">
            <p>School name: {eduItem.schoolName}</p>
            <p>Study name: {eduItem.studyName}</p>
            <p>Date from: {eduItem.dateFrom}</p>
            <p>Date to: {eduItem.dateTo}</p>
            <button className="del-btn">X</button>
          </div>
        ))}
        <h3>Experience</h3>
        {props.experience.map((expItem, index) => (
          <div key={index} className="card">
            <p>Company name: {expItem.companyName}</p>
            <p>Position: {expItem.positionTitle}</p>
            <p>Tasks: {expItem.tasks}</p>
            <p>Date from: {expItem.from}</p>
            <p>Date to: {expItem.to}</p>
            <button className="del-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
