import React, { Component } from "react";
import RegisterForm from "views/Executive/RegisterForm/Register";
import StepZilla from "react-stepzilla";

var steps = [
  { name: "School Registration", component: <RegisterForm /> },
  {
    name: "Executive Registration",
    component: <div>Executive Registration</div>,
  },
];
export default class SchoolRegister extends Component {
  render() {
    return (
      <div className="content">
        <br />
        <StepZilla stepsNavigation={true} showSteps={true} steps={steps} />
      </div>
    );
  }
}
