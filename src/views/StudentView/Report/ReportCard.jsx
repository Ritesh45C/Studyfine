import React, { Component, Fragment } from "react";
import { TextField } from "@material-ui/core";
export default class ReportCard extends Component {
  render() {
    let products = [
      {
        name: "Arts",
        grade: 5,
        feedback: "Average",
      },
      {
        name: "Computer",
        grade: 10,
        feedback: "Good",
      },
      {
        name: "English",
        grade: 2,
        feedback: "Good",
      },
      {
        name: "History",
        grade: 5,
        feedback: "Average",
      },

      {
        name: "Maths",
        grade: 2,
        feedback: "Good",
      },
      {
        name: "Phy. Education",
        grade: 5,
        feedback: "Average",
      },
      {
        name: "Science",
        grade: 10,
        feedback: 123.75,
      },
      {
        name: "Social Studies",
        grade: 2,
        feedback: "Good",
      },
    ];

    return (
      <div className="reportCard">
        <div>
          <div className="reportHeader"></div>

          <div>
            <div className="ReportHeading">Report Card</div>
            <div className="schoolName">BeechTown High School</div>
          </div>
          <div className="studentInfo">
            <TextField
              id="standard-basic"
              defaultValue="John Doe"
              label="Name:"
            />
            <TextField id="standard-basic" defaultValue="2020" label="Year:" />
            <TextField
              id="standard-basic"
              defaultValue="Mr. James"
              label="Adviser:"
            />
            <TextField
              id="standard-basic"
              defaultValue="Final"
              label="Exam Period:"
            />
          </div>
          <div className="subjectName">
            <div>Subject</div>
            <div>Grade</div>
            <div>Feedback</div>
          </div>
          <div className="studentGrades">
            {products.map((data) => {
              return (
                <Fragment>
                  <div>{data.name}</div>
                  <div>{data.grade}</div>
                  <div>{data.feedback}</div>
                </Fragment>
              );
            })}
          </div>
          <h3 className="gradeHeading">Grading Scale</h3>
          <div className="gradeBelow">
            <div className="gradeScale">
              <div>
                <div>A+ = 96-100</div>
                <div>A = 96-100</div>
                <div>B+ = 96-100</div>
                <div>B = 96-100</div>
              </div>
              <div>
                <div>C = 96-100</div>
                <div>D = 96-100</div>
                <div>Fail = 96-100</div>
              </div>
            </div>
            <div>
              <h4>Total Days of School</h4>
              <div>Days Attended:</div>
              <div>Days Absent:</div>
            </div>
          </div>
          <div className="reportFooter"></div>
        </div>
      </div>
    );
  }
}
