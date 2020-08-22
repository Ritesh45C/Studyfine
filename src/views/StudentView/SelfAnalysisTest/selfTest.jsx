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
import Dropdowncls from "./Dropdown";
import Testtable from "../../Testtable";
import Multichoiceques from "./Multichoiceques";
import Multinew from "./MultiNew";
import StepZilla from "react-stepzilla";
import TimerMachine from "react-timer-machine";

class Selfanalysistest extends React.Component {
  state = {
    setAge: "",
    age: "",
    pause: false,
  };
  // onClickNext() {
  //   console.log("Call Next");
  //   const { steps, currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep + 1
  //   });
  // }

  pause = () => {
    this.setState({ pause: true });
  };

  render() {
    var steps = [
      { component: <Dropdowncls /> },
      { component: <Multichoiceques /> },
      { component: <Multinew pause={this.pause} /> },
    ];
    if (this.props.close) {
      steps = [
        { component: <Multichoiceques /> },
        { component: <Multinew pause={this.pause} close={this.props.close} /> },
      ];
    }

    return (
      <div className="content">
        <div className="step-progress">
          <Row>
            <Col md="9"></Col>
            <Col md="3">
              <Card className="card-stats timercard">
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

          <StepZilla
            onStepChange={() => this.setState({ started: true })}
            steps={steps}
          />
        </div>
      </div>
    );
  }
}

export default Selfanalysistest;
