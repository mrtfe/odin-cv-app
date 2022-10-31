import React, { Component } from "react";
import "../styles/formStyle.css";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.companyName,
      positionTitle: this.positionTitle,
      tasks: this.tasks,
      from: this.from,
      to: this.to,
    };
  }
  render() {
    return (
      <>
        <form className="form experience">
          <h3>Experience</h3>
          <div>
            <input
              placeholder="Company name"
              type="text"
              value={this.companyName}
              onChange={(e) => this.setState({ companyName: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Position title"
              type="text"
              value={this.positionTitle}
              onChange={(e) => this.setState({ positionTitle: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="Main tasks of your jobs"
              type="text"
              value={this.tasks}
              onChange={(e) => this.setState({ tasks: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="From"
              type="text"
              value={this.from}
              onChange={(e) => this.setState({ from: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
          <div>
            <input
              placeholder="To"
              type="text"
              value={this.to}
              onChange={(e) => this.setState({ to: e.target.value })}
            ></input>
            <button className="btn-submit">Submit</button>
            <button className="btn-edit">Edit</button>
          </div>
        </form>
      </>
    );
  }
}
