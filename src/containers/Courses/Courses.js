import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Course from "../Course/Course";
import _404Error from '../../_404Error'
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: "1", title: "Angular - The Complete Guide" },
      { id: "2", title: "Vue - The Complete Guide" },
      { id: "3", title: "PWA - The Complete Guide" }
    ]
  };

  // handleClick = id => {
  //   //navigate programmaticaly
  //   this.props.history.push({ pathname: "/" + id, state: "hi" });
  // };

  render() {
    console.log('pathname: ', this.props.location.pathname);
    // Now it works only if we do a letter after coursee
    // like 'courses/w' 
    // If we type a number and a letter it crashes.
    const pathname = this.props.location.pathname;
    const regex = 'courses/[1-3]'
    const regex2 = 'courses/[0-9]|[a-z]|[A-Z]'

    let course = null; // so it doesn't render anything when the path is just /courses
  

    if (pathname.match(regex)) {
      course = <Route path="/courses/:id" component={Course} />
    } else if (pathname.match(regex2)){
        course = <Route component={_404Error} />
    }


    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <Link
                to={{
                  pathname: "/courses/" + course.id,
                  // this is how you pass params through Router
                  state: { message: course.title }
                }}
                key={course.id}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>
        { course }
      </div>
    );
  }
}

export default Courses;
