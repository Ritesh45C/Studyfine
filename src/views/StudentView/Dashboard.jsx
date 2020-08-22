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
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
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
import TabsWrappedLabel from "components/Tabs/Tabs.jsx";
import SubjectTabs from "components/SubjectTabs/SubjectTabs";
import { Rnd } from "react-rnd";

import SketchExample from "Canvas";
import Notifications from "components/Notifications";

const stylePdf = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#ffffff",
  // padding:"20px",
  boxShadow: "0px 0px 2px #C1C1C1",
  maxHeight: "20",
  // overflowY: "auto",
  // overflowX: "hidden",
  top: "-50",
};

class Dashboard extends React.Component {
  state = {
    color: "#000",
    width: 450,
    height: 289,
    brushRadius: 3,
    lazyRadius: 3,
    open: false,
    background: "#444",
    turnon: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ turnon: true });
    }, 4000);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.turon) {
  //     return false;
  //   }
  //   return true;
  // }

  openModal = () => {
    console.log("open Modal");
    this.setState({
      open: true,
    });
  };
  closeModal = () => {
    this.setState({
      open: false,
    });
  };
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    // setBackground(color.hex);
  };
  render() {
    setTimeout(() => {
      this.setState({ turnon: null });
    }, 1000);
    return (
      <>
        <div className="content">
          <Notifications turnon={this.state.turnon} />
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
          <Row>
            <Col md="8">
              <Card className="card-chart">
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
              <Card className="card-chart">
                {/* <Rnd
                  style={stylePdf}
                  default={{
                    x: 0,
                    y: 0,
                    width: 650,
                    
                  }}
                > */}
                {/* <div className={classNames.tools}>
                        <button
                          onClick={() => {
                            localStorage.setItem(
                              "savedDrawing",
                              this.saveableCanvas.getSaveData()
                            );
                          }}
                          className="notpad-btn"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            this.saveableCanvas.clear();
                          }}
                          className="notpad-btn"
                        >
                          Clear
                        </button>
                        <button
                          onClick={() => {
                            this.saveableCanvas.undo();
                          }}
                          className="notpad-btn"
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                        brushRadius={this.state.brushRadius}
                        lazyRadius={this.state.lazyRadius}
                        gridColor="#fff"
                        canvasHeight={this.state.height}
                      /> */}

                {/* </Rnd> */}
                <img
                  alt="..."
                  src={require("assets/img/notpad.png")}
                  onClick={this.openModal}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <TabsWrappedLabel />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <SubjectTabs />
            </Col>
          </Row>
          {this.state.open ? (
            <Rnd
              cancel=".cancel"
              style={stylePdf}
              onResizeStop={(e, direction, ref, delta, position) => {
                this.setState({
                  height: ref.offsetHeight - 160,
                  width: ref.offsetWidth - 100,
                });
              }}
              // default={{
              //   x: 0,
              //   y: 0,
              //   // width: 650
              // }}
              // minWidth="450px"
              // minHeight="450px"
            >
              <div className="notpad-modal-wrapper">
                {/* <div className="buttonTools">
                  <div>
                    <button
                      onClick={() => {
                        localStorage.setItem(
                          "savedDrawing",
                          this.saveableCanvas.getSaveData()
                        );
                      }}
                      className="notpad-btn"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        this.saveableCanvas.clear();
                      }}
                      className="notpad-btn"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => {
                        this.saveableCanvas.undo();
                      }}
                      className="notpad-btn"
                    >
                      Undo
                    </button>
                  </div>

                  <div className="colorPicker">
                    {" "}
                    <CompactPicker
                      color={this.state.background}
                      onChangeComplete={this.handleChangeComplete}
                    />
                  </div>

                  <div
                    className="close-button close-pdf cancel"
                    onClick={this.closeModal}
                  >
                    Close
                  </div>
                </div> */}
                <div
                  className="close-button close-pdf cancel"
                  onClick={this.closeModal}
                >
                  Close
                </div>
                <SketchExample
                  width={this.state.width}
                  height={this.state.height}
                />

                {/* <CanvasDraw
                  className="cancel"
                  ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                  brushRadius={this.state.brushRadius}
                  lazyRadius={this.state.lazyRadius}
                  brushColor={this.state.background}
                  gridColor="#fff"
                  canvasHeight={this.state.height}
                  canvasWidth={this.state.width}
                /> */}
              </div>
            </Rnd>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Dashboard;
