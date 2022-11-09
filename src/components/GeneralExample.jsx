import React from "react";
import "../styles/exampleStyle.css";

export function GeneralExample(props) {
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
        <p>School name: {props.schoolName}</p>
        <p>Study name: {props.studyName}</p>
        <p>Date from: {props.dateFrom}</p>
        <p>Date to: {props.dateTo}</p>
      </div>
      <div className="education-info">
        <h3>Experience</h3>
        <p>Company name: {props.companyName}</p>
        <p>Study name: {props.studyName}</p>
        <p>Date from: {props.dateFrom}</p>
        <p>Date to: {props.dateTo}</p>
      </div>
    </div>
  );
}