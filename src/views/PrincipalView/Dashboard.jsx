import React from "react";
import { Card, CardBody, CardFooter, Row, Col, Button } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { MDBDataTable } from "mdbreact";

import "./style.css";
import BarChart from "./../../components/BarChart/BarChart";

import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";

// import Switch from '@material-ui/core/Switch';
import Switch from "react-switch";

//Table Data
const data = {
  columns: [
    {
      label: "Roll No",
      field: "rollno",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 270,
    },
    {
      label: "Present",
      field: "present",
      sort: "asc",
      width: 200,
    },
    {
      label: "Absent",
      field: "absent",
      sort: "asc",
      width: 100,
    },
    {
      label: "Total",
      field: "total",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      rollno: 1,
      present: <input type="radio" checked name="a"></input>,
      absent: <input type="radio" name="a"></input>,
      total: 7,
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      rollno: 2,
      present: <input type="radio" checked name="b"></input>,
      absent: <input type="radio" name="b"></input>,
      total: 7,
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      rollno: 3,
      present: <input type="radio" checked name="c"></input>,
      absent: <input type="radio" name="c"></input>,
      total: 7,
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      rollno: 4,
      present: <input type="radio" checked name="d"></input>,
      absent: <input type="radio" name="d"></input>,
      total: 7,
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      rollno: 5,
      present: <input type="radio" checked name="e"></input>,
      absent: <input type="radio" name="e"></input>,
      total: 7,
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      rollno: 6,
      present: <input type="radio" checked name="f"></input>,
      absent: <input type="radio" name="f"></input>,
      total: 7,
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      rollno: 7,
      present: <input type="radio" checked name="g"></input>,
      absent: <input type="radio" name="g"></input>,
      total: 7,
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      rollno: 8,
      present: <input type="radio" checked name="h"></input>,
      absent: <input type="radio" name="h"></input>,
      total: 7,
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      rollno: 9,
      present: <input type="radio" checked name="i"></input>,
      absent: <input type="radio" name="i"></input>,
      total: 7,
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      rollno: 10,
      present: <input type="radio" checked name="j"></input>,
      absent: <input type="radio" name="j"></input>,
      total: 7,
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      rollno: 11,
      present: <input type="radio" checked name="k"></input>,
      absent: <input type="radio" name="k"></input>,
      total: 7,
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      rollno: 12,
      present: <input type="radio" checked name="l"></input>,
      absent: <input type="radio" name="l"></input>,
      total: 7,
    },
  ],
};

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

class Dashboardprincipal extends React.Component {
  state = {
    age: "",
    checked: false,
    switchCheck: false,
    performanceChecked: false,
  };

  handleChange = (checked) => {
    this.setState({ checked: !this.state.checked });
  };

  handleSwitchChange = (checked) => {
    this.setState({ switchCheck: !this.state.switchCheck });
  };
  handlePerformance = (checked) => {
    this.setState({
      performanceChecked: !this.state.performanceChecked,
    });
  };
  render() {
    const { classes } = this.props;
    console.log("checked", this.state.checked);
    return (
      <div className="content">
        <Row>
          <Col lg="12" md="12" sm="12">
            <Card className="card-stats custom-card-height">
              <CardBody className="custom-card-body">
                <ul>
                  <li>
                    <p className="card-category">
                      *** Tomorrow is Annual Funtion ***
                    </p>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card className="card-teacher-wrapper">
          <CardBody className="teacher-dashboard-tbl-wrapper">
            <label className="switch-btn-wrapper">
              <Switch
                onChange={this.handleSwitchChange}
                checked={this.state.switchCheck}
                onColor="#26C6DA"
                uncheckedIcon=" "
                checkedIcon=" "
              />
            </label>
            {this.state.switchCheck ? (
              <Card>
                <CardBody>
                  <Row>
                    <Col md="5">
                      <h4>Teacher Attendance</h4>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Classes
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            // value={this.state.age}
                            // onChange={this.handleChange}
                          >
                            <MenuItem value="Ten">class1</MenuItem>
                            <MenuItem value="Twenty">class4</MenuItem>
                            <MenuItem value="Thirty">class3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <MDBDataTable striped bordered small data={data} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody>
                  <Row>
                    <Col md="5">
                      <h4>Student Attendance</h4>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Classes
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            // value={this.state.age}
                            // onChange={this.handleChange}
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
                      <MDBDataTable striped bordered small data={data} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            )}
          </CardBody>
          <CardFooter className="card-teacher-footer">
            <Button className="btn btn-primary">Submit</Button>
          </CardFooter>
        </Card>
        {/* <Row>
                    <Col md="3">
                        <h4>Syllabus Indicator</h4>
                    </Col>
                    <Col md="3">
                                       
                            <div className="syllabus-dropdown">
                                 <FormControl>
                                    <InputLabel id="demo-customized-select-label">Classes</InputLabel>
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


                <Card>
                    <CardBody>
                        <Row>
                            <Col md="12">
                                <ul className="progress-bar-wrapper">
                                    <li> <h3>Math</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LinearDeterminate /><span>100%</span></li>
                                    <li><h3>English</h3>&nbsp; <LinearDeterminate /><span>100%</span></li>
                                    <li><h3>Science</h3> <LinearDeterminate /><span>100%</span></li>
                                </ul>
                            </Col>
                
                        </Row>

                    </CardBody>
                </Card>

                */}

        <Card>
          <CardBody>
            <label className="switch-btn-wrapper">
              <Switch
                onChange={this.handlePerformance}
                checked={this.state.performanceChecked}
                onColor="#26C6DA"
                uncheckedIcon=" "
                checkedIcon=" "
              />
            </label>
            {this.state.performanceChecked ? (
              <Card>
                <CardBody>
                  <Row>
                    <Col md="5">
                      <h4>Teacher Performance</h4>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Class Teacher
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.age}
                            onChange={this.handleChange}
                          >
                            <MenuItem value="Ten">teacher1</MenuItem>
                            <MenuItem value="Twenty">teacher2</MenuItem>
                            <MenuItem value="Thirty">teacher3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Student Name
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.age}
                            onChange={this.handleChange}
                          >
                            <MenuItem value="Ten">student1</MenuItem>
                            <MenuItem value="Twenty">student2</MenuItem>
                            <MenuItem value="Thirty">student3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                  </Row>

                  <BarChart />
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody>
                  <Row>
                    <Col md="5">
                      <h4>Student Performance</h4>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Class Teacher
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.age}
                            onChange={this.handleChange}
                          >
                            <MenuItem value="Ten">teacher1</MenuItem>
                            <MenuItem value="Twenty">teacher2</MenuItem>
                            <MenuItem value="Thirty">teacher3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Student Name
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.age}
                            onChange={this.handleChange}
                          >
                            <MenuItem value="Ten">student1</MenuItem>
                            <MenuItem value="Twenty">student2</MenuItem>
                            <MenuItem value="Thirty">student3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                  </Row>

                  <BarChart />
                </CardBody>
              </Card>
            )}
          </CardBody>
        </Card>

        {/* <Row>
                    <Col md="3">
                        <h4>Performance</h4>
                    </Col>
                    <Col md="3">          
                             <div className="syllabus-dropdown"> 
                             <FormControl>
                                    <InputLabel id="demo-customized-select-label">Class Teacher</InputLabel>
                                    <Select
                                    labelId="demo-customized-select-label"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value="Ten">teacher1</MenuItem>
                                        <MenuItem value="Twenty">teacher2</MenuItem>
                                        <MenuItem value="Thirty">teacher3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                    </Col>
                    <Col md="3">          
                             <div className="syllabus-dropdown">
                               <FormControl>
                                    <InputLabel id="demo-customized-select-label">Student Name</InputLabel>
                                    <Select
                                    labelId="demo-customized-select-label"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value="Ten">student1</MenuItem>
                                        <MenuItem value="Twenty">student2</MenuItem>
                                        <MenuItem value="Thirty">student3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                    </Col>
                </Row>
                <Card>
                    <CardBody>

                        <BarChart/>
                    </CardBody>
                </Card> */}
      </div>
    );
  }
}
export default Dashboardprincipal;
