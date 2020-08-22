import React from "react";
import { Row, Col } from "reactstrap";

import SyllabusData from "./Syllabus/Syllabus";
import StepZilla from "react-stepzilla";
import "./style.css";
import AllSyllabusData from "./Syllabus/AllSyllabus";
var data = {
  class1: "Class 1",
  class2: "Class 2",
  class3: "Class 3",
  class4: "Class 4",
  class5: "Class 5",
};

var steps = [
  { name: "All Classes", component: <AllSyllabusData data={data} /> },

  { name: "Class1", component: <SyllabusData data={data.class1} /> },
  { name: "Class2", component: <SyllabusData data={data.class2} /> },
  { name: "Class3", component: <SyllabusData data={data.class3} /> },
  { name: "Class4", component: <SyllabusData data={data.class4} /> },
  { name: "Class5", component: <SyllabusData data={data.class5} /> },
];
class Syllabus extends React.Component {
  state = {
    age: "",
  };
  handleChange = (event) => {
    console.log("event", event);
    this.setState({
      age: event.target.value,
    });
  };
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="3">
            <h4>Syllabus Indicator</h4>
          </Col>
          {/* <Col md="3">
            <div className="syllabus-dropdown">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Classes
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  value={this.state.age}
                  onChange={this.handleChange}
                >
                  <MenuItem value="Ten">class1</MenuItem>
                  <MenuItem value="Twenty">class2</MenuItem>
                  <MenuItem value="Thirty">class3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="syllabus-dropdown space-top-syllabus">
              <Card>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <ul className="progress-bar-wrapper">
                        <li>
                          {" "}
                          <h3>Math</h3>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <LinearDeterminate />
                          <span>100%</span>
                        </li>
                        <li>
                          <h3>English</h3>&nbsp; <LinearDeterminate />
                          <span>100%</span>
                        </li>
                        <li>
                          <h3>Science</h3> <LinearDeterminate />
                          <span>100%</span>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col> */}
        </Row>

        <StepZilla stepsNavigation={true} showSteps={true} steps={steps} />
      </div>
    );
  }
}

export default Syllabus;
