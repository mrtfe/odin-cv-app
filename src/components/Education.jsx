import React, { Component } from "react";
import "../styles/formStyle.css";

export class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: this.schoolName,
      studyName: this.studyName,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }
  render() {
    return (
      <>
        <form>
          <h3>Education</h3>
          <div>
            <input
              placeholder="School name"
              type="text"
              value={this.schoolName}
              onChange={(e) => this.setState({ schoolName: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Title of study"
              type="text"
              value={this.studyName}
              onChange={(e) => this.setState({ studyName: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Date of study / From"
              type="text"
              value={this.dateFrom}
              onChange={(e) => this.setState({ dateFrom: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Date of study / To"
              type="text"
              value={this.dateTo}
              onChange={(e) => this.setState({ dateTo: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
        </form>
      </>
    );
  }
}
