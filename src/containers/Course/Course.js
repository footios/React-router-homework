import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log("Course", this.props);
    return (
      <div style={{ textAlign: "center", width: "100%" }} >
        <h1>{this.props.location.state.message}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
