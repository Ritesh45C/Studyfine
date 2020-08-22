/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import TimerMachine from "react-timer-machine";

// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Principallivetest extends React.Component {
  state = {
    setAge: "",
    age: "",
    class: "",
    subject: "",
    topic: "",
    subTopic: "",
    quesList: false,
  };

  handleChangeClass = (cls) => {
    console.log("cls", cls);
    this.setState({
      class: cls.target.value,
    });
  };
  handleChangeSubject = (subject) => {
    this.setState({
      subject: subject.target.value,
    });
  };
  handleChangeTopic = (topic) => {
    this.setState({
      topic: topic.target.value,
    });
  };
  handleChangeSubTopic = (subTopic) => {
    this.setState({
      subTopic: subTopic.target.value,
    });
  };

  handleChangeNumber = (num) => {
    this.setState({
      num: num.target.value,
    });

    if (
      this.state.class == "" ||
      undefined ||
      this.state.subject == "" ||
      undefined ||
      this.state.topic == "" ||
      undefined ||
      this.state.subTopic == "" ||
      undefined
    ) {
      this.setState({
        quesList: false,
      });
    } else {
      this.setState({
        quesList: true,
        started: true,
      });
    }
  };

  render() {
    return (
      <div className="content">
        <div className="step-progress">
          <Row>
            <Col md="9"></Col>
            <Col md="3">
              <Card className="card-stats">
                <CardBody className="timer-card">
                  <h4>Timer &nbsp; :</h4>
                  <div>
                    <h4>
                      <TimerMachine
                        timeStart={1 * 1000} // start at 10 seconds
                        timeEnd={20 * 1000} // end at 20 seconds
                        onStart={(time) =>
                          console.info(`Timer started: ${JSON.stringify(time)}`)
                        }
                        started={this.state.started}
                        paused={this.state.pause}
                        countdown={false} // use as stopwatch
                        interval={1000} // tick every 1 second
                        // formatTimer={(time, ms) =>
                        //   moment.duration(ms, "milliseconds").format("h:mm:ss")
                        // }
                        onStop={(time) =>
                          console.info(`Timer stopped: ${JSON.stringify(time)}`)
                        }
                        onTick={(time) =>
                          console.info(`Timer ticked: ${JSON.stringify(time)}`)
                        }
                        onPause={(time) =>
                          console.info(`Timer paused: ${JSON.stringify(time)}`)
                        }
                        onResume={(time) =>
                          console.info(`Timer resumed: ${JSON.stringify(time)}`)
                        }
                        onComplete={(time) =>
                          console.info(
                            `Timer completed: ${JSON.stringify(time)}`
                          )
                        }
                      />
                    </h4>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardBody className="custom-card-body card-bottom-padding">
                  <Row>
                    <Col md="1"></Col>
                    <Col md="2">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Select Class
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.cls}
                            onChange={this.handleChangeClass}
                          >
                            <MenuItem value={1}>Class1</MenuItem>
                            <MenuItem value={2}>Class2</MenuItem>
                            <MenuItem value={3}>Class3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Select Subject
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.subject}
                            onChange={this.handleChangeSubject}
                          >
                            <MenuItem value="Ten">English</MenuItem>
                            <MenuItem value="Twenty">Hindi</MenuItem>
                            <MenuItem value="Thirty">Science</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Select Topic
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.topic}
                            onChange={this.handleChangeTopic}
                          >
                            <MenuItem value="Ten">English</MenuItem>
                            <MenuItem value="Twenty">Hindi</MenuItem>
                            <MenuItem value="Thirty">Science</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            Select SubTopic
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.subTopic}
                            onChange={this.handleChangeSubTopic}
                          >
                            <MenuItem value="Ten">English</MenuItem>
                            <MenuItem value="Twenty">Hindi</MenuItem>
                            <MenuItem value="Thirty">Science</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="syllabus-dropdown">
                        <FormControl>
                          <InputLabel id="demo-customized-select-label">
                            No of Question
                          </InputLabel>
                          <Select
                            labelId="demo-customized-select-label"
                            value={this.state.num}
                            onChange={this.handleChangeNumber}
                          >
                            <MenuItem value="Ten">5</MenuItem>
                            <MenuItem value="Ten">10</MenuItem>
                            <MenuItem value="Twenty">15</MenuItem>
                            <MenuItem value="Thirty">20</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <h2>Question & Answer List:</h2>
              {this.state.quesList ? (
                <Card>
                  <CardBody>
                    <ul>
                      <li>What is Data?</li>
                      <hr />
                      <li>What is Computer?</li>
                      <hr />
                      <li>What is Reactjs?</li>
                      <hr />
                      <li>What is java?</li>
                      <hr />
                      <li>What is meaning of gravity?</li>
                      <hr />
                    </ul>

                    <div className="right">
                      <Button className="btn btn-primary">Submit</Button>
                    </div>
                  </CardBody>
                </Card>
              ) : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Principallivetest;
