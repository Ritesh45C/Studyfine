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
// react plugin used to create google maps
import PDFViewer from "pdf-viewer-reactjs";
import { Rnd } from "react-rnd";
import DoneIcon from "@material-ui/icons/Done";
import { green } from "@material-ui/core/colors";

// reactstrap components
import { Row, Col } from "reactstrap";
import "../../style.css";
import img from "../../../assets/img/shopping-book.jpg";
import { Chip } from "@material-ui/core";

const stylePdf = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#ffffff",
  // padding:"20px",
  boxShadow: "0px 0px 2px #C1C1C1",
  maxHeight: "300",
  overflowY: "auto",
  overflowX: "hidden",
  top: "-50",
};

class Recommendation extends React.Component {
  state = {
    open: false,
    disable: "",
  };

  // PDF
  handleOpenPdf = () => {
    this.setState({ open: true });
  };
  handleClosePdf = () => {
    this.setState({ open: false });
  };
  handleDisable = () => {
    this.setState({ disable: "disable" });
  };

  render() {
    const primary = green[500];
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Recommendation Screen</h5>
                </div>
                <div className="card-body">
                  <Row>
                    <Col md="2" sm="0" xs="0"></Col>
                    <Col md="4" sm="0" xs="0"></Col>
                    <Col md="2" sm="4" xs="4" className="shopping-tbl-title">
                      <h2>Topic</h2>
                    </Col>
                    <Col md="2" sm="4" xs="4" className="shopping-tbl-title">
                      <h2>Sub-Topic</h2>
                    </Col>
                    <Col md="2" sm="4" xs="4" className="shopping-tbl-title">
                      <h2>Status</h2>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="2" sm="2" xs="12">
                      <img
                        alt=""
                        src={require("../../../assets/img/pdf1.png")}
                        className="tutor-pdf"
                        onClick={this.handleOpenPdf}
                      />
                    </Col>
                    <Col md="4" sm="4" xs="12">
                      <div className="notebook-wrapper">
                        <h3>Maths</h3>
                        <p>Algebra PDF Tutorial !</p>
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div className="euro">
                        {" "}
                        <p>Algebra PDF Tutorial !</p>{" "}
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col add-sub">
                      <div className="euro">
                        {" "}
                        <p>Algebra PDF Tutorial !</p>{" "}
                      </div>{" "}
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div>
                        <Chip
                          label="Completed"
                          color={primary}
                          deleteIcon={<DoneIcon />}
                        />{" "}
                        <br />
                        <Chip
                          color="primary"
                          label="Take Test"
                          onClick={this.handleDisable}
                          deleteIcon={<DoneIcon />}
                        />
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className={this.state.disable}>
                    <Col md="2" sm="2" xs="12">
                      <img
                        alt=""
                        src={require("../../../assets/img/pdf1.png")}
                        className="tutor-pdf"
                        onClick={this.handleOpenPdf}
                      />
                    </Col>
                    <Col md="4" sm="4" xs="12">
                      <div className="notebook-wrapper">
                        <h3>Science</h3>
                        <p>Plants & Bio-Organism !</p>
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div className="euro">
                        {" "}
                        <p>Plants & Bio-Organism</p>{" "}
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col add-sub">
                      <div className="euro">
                        {" "}
                        <p>Plants & Bio-Organism</p>{" "}
                      </div>{" "}
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div className="flex">
                        <Chip
                          label="Completed"
                          color={primary}
                          deleteIcon={<DoneIcon />}
                        />{" "}
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className={this.state.disable}>
                    <Col md="2" sm="2" xs="12">
                      <img
                        alt=""
                        src={require("../../../assets/img/pdf1.png")}
                        className="tutor-pdf"
                        onClick={this.handleOpenPdf}
                      />{" "}
                    </Col>
                    <Col md="4" sm="4" xs="12">
                      <div className="notebook-wrapper">
                        <h3>Physics</h3>
                        <p>Electricity & Current Flow !</p>
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div className="euro">
                        {" "}
                        <p>Electricity & Current Flow !</p>{" "}
                      </div>
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col add-sub">
                      <div className="euro">
                        {" "}
                        <p>Electricity & Current Flow !</p>{" "}
                      </div>{" "}
                    </Col>
                    <Col md="2" sm="2" xs="12" className="price-col">
                      <div className="flex">
                        {" "}
                        <Chip
                          label="Completed"
                          color={primary}
                          deleteIcon={<DoneIcon />}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="card-footer card-foot">
                  <Row>
                    <Col md="6" sm="6" xs="6">
                      <p>Total</p>
                    </Col>

                    <Col md="6" sm="6" xs="6" className="total-result">
                      <div className="flex right">
                        {" "}
                        <div className="euro">₹</div> 1846
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          {/* Pdf Modal */}
          {this.state.open ? (
            <Rnd
              cancel=".close-pdf"
              style={stylePdf}
              default={{
                x: 0,
                y: 0,
                width: 650,
              }}
            >
              <div className="pdfwrapper">
                {/* <button>Mark as Read</button> */}
                <div onClick={this.handleClosePdf} className="close-pdf">
                  Close
                </div>
                <div className="pdf-wrapper-modal">
                  <PDFViewer
                    document={{
                      url: require("../../../assets/pdf/bhhn1ps.pdf"),
                    }}
                    className="pdf-css"
                  />
                </div>
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

export default Recommendation;
