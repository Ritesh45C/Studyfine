import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MyMapComponent from "./../../components/GoogleMap/GoogleMap";
class LiveTrack extends React.Component {
  state = {
    class: "",
    student: "",
    topic: "",
    subTopic: "",
    mapShow: false,
  };
  handleChangeClass = (cls) => {
    console.log("cls", cls.target.value);
    this.setState({
      class: cls.target.value,
    });
  };
  handleChangeStudent = (student) => {
    console.log("student", student);
    this.setState({
      student: student.target.value,
    });

    if (this.state.class == "" && this.state.student == "") {
      this.setState({
        mapShow: false,
      });
    } else {
      this.setState({
        mapShow: true,
      });
    }
  };
  render() {
    return (
      <div className="content">
        <Card>
          <CardBody className="custom-card-body card-bottom-padding">
            <Row>
              <Col md={{ size: 4, offset: 2 }}>
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Class
                    </InputLabel>
                    <Select
                      labelId="demo-customized-select-label"
                      value={this.state.class}
                      onChange={this.handleChangeClass}
                    >
                      <MenuItem value="class1">Class1</MenuItem>
                      <MenuItem value="class2">Class2</MenuItem>
                      <MenuItem value="class3">Class3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Col>

              <Col md="4">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Student
                    </InputLabel>
                    <Select
                      labelId="demo-customized-select-label"
                      value={this.state.student}
                      onChange={this.handleChangeStudent}
                    >
                      <MenuItem value="Ten">Student 1</MenuItem>
                      <MenuItem value="Twenty">Student 2</MenuItem>
                      <MenuItem value="Thirty">Student 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Col>
            </Row>

            <Row className="google-map-space-top">
              <Col md="12">{this.state.mapShow ? <MyMapComponent /> : ""}</Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default LiveTrack;
