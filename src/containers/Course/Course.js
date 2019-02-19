import React, { Component } from "react";

class Course extends Component {
state = {
  courseTitle: ''
}

// this is to parse the title
// and set it to the state
componentDidMount() {
  this.parseQueryParams()
    
  }

  componentDidUpdate() {
    this.parseQueryParams()
  }

  parseQueryParams(){
    const query = new URLSearchParams(this.props.location.search)
    for (const param of query.entries()) {
      console.log('param', param);
      // to prevent infinite loop
      if(this.state.courseTitle !== param[1]) {
        this.setState({courseTitle: param[1]})
      }
  }
  
}

  render() {
    console.log("Course", this.props);
    return (
      <div style={{ textAlign: "center", width: "100%" }} >
        <h1>{this.state.courseTitle}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
