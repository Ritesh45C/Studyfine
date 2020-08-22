import React from "react";
import { Line } from "react-chartjs-2";
import {
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  IconButton,
  RadioGroup,
} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import { dashboardNASDAQChart } from "variables/charts.jsx";
// import Userprofile from "views/Common/Userprofile";
class ParentDashboard extends React.Component {
  state = {
    value: "",
    open: true,
  };

  handleSubmit = (e, id) => {
    this.setState({ open: false });
    // e.preventDefault();
    // if (!value) {
    //   alert("Please choose the Daycare");
    // } else {
    localStorage.setItem("daycareId", this.state.value);
    this.props.history.push(`/parents/dashboard/`);
    //   window.location.reload();
    // }
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    var name = localStorage.getItem("daycareId");
    console.log(name);
    return (
      <>
        {!name ? (
          <Dialog className="model" fullWidth={true} open={this.state.open}>
            <div className="dialogBox">
              <FormControl component="fieldset">
                <div style={{ paddingBottom: "20px" }}>
                  <h3 component="legend">Choose Your Child</h3>
                </div>

                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="John Doe"
                    control={<Radio />}
                    label="John Doe"
                  />
                </RadioGroup>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="Alex John"
                    control={<Radio />}
                    label="Alex John"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <div className="daycare">
                <IconButton
                  color="primary"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </div>
            </div>
          </Dialog>
        ) : null}

        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-chart" style={{ height: "468px" }}>
                <CardHeader>
                  <CardTitle tag="h5">Daily Personal Progress</CardTitle>
                  <p className="card-category">Live Test Results</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Average Performance{" "}
                    <i className="fa fa-circle text-warning" /> Self Performance
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data as per Live Test Results
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">Amit Gupta</h5>
                    </a>
                    <p className="username">@amitgupta</p>
                  </div>
                  <p className="description text-center">
                    "Work is Worship"
                    <br />
                    <br />
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Video Seen</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          3 <br />
                          <small>Self Test Pending</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          1.4hr
                          <br />
                          <small>Time Spent</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          =
        </div>
      </>
    );
  }
}
export default ParentDashboard;
