import React, { Component } from "react";
import "../styles/formStyle.css";

export class Education extends Component {
  render() {
    return (
      <>
        <form>
          <h3>Education</h3>
          <div>
            <input placeholder="School name" type="text"></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input placeholder="Title of study" type="text"></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input placeholder="Date of study / From" type="text"></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input placeholder="Date of study / To" type="text"></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
        </form>
      </>
    );
  }
}
