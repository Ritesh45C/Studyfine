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

// reactstrap components
import {
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import userPic from "../../../assets/img/profile.png";
import fileIcon from "../../../assets/img/file-icon.svg";
import "../../style.css";
import DateTimePicker from "react-datetime-picker";
import DropzoneComponent from "react-dropzone-component";
// Modal
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

var componentConfig = {
  iconFiletypes: [".jpg", ".png", ".gif"],
  showFiletypeIcon: false,
  postUrl: "/uploadHandler",
  thumbnail: true,
};
var djsConfig = {
  autoProcessQueue: false,
  params: { myParameter: "I'm a parameter!" },
};

var eventHandlers = {
  addedfile: (file) => {
    console.log("file", file.name);
  },
  thumbnail: false,
};

class Diary extends React.Component {
  state = {
    date: new Date(),
    dropdownOpen: false,
  };

  onChangeDate = (date) => this.setState({ date });

  dropdownToggle = (e) => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    console.log("Date", new Date());
    console.log("this.state.dropdownOpen", this.state.dropdownOpen);
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6" className="text-center">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Teachers</h4>
                  <p className="category">Backend development</p>
                </div>
                <div className="card-body">
                  <hr />
                  <Row>
                    <Col md="3" sm="3" xs="3">
                      <div className="teacher-img-wrapper">
                        <div className="img-wrapper">
                          <img src={userPic} className="img-raised" />
                          <p>Teacher</p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" sm="6" xs="6">
                      <p className="text-left">
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </p>
                    </Col>
                    <Col md="3" sm="3" xs="3">
                      <div className="subject-wrapper">
                        <h3>English</h3>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="3" sm="3" xs="3">
                      <div className="teacher-img-wrapper">
                        <div className="img-wrapper">
                          <img src={userPic} className="img-raised" />
                          <p className="p-tag-padding">Teacher</p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" sm="6" xs="6">
                      <p className="text-left p-tag-padding">
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </p>
                    </Col>
                    <Col md="3" sm="3" xs="3">
                      <div className="subject-wrapper">
                        <h3 className=".p-tag-padding">English</h3>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="3" sm="3" xs="3">
                      <div className="teacher-img-wrapper">
                        <div className="img-wrapper">
                          <img src={userPic} className="img-raised" />
                          <p className="p-tag-padding">Teacher</p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" sm="6" xs="6">
                      <p className="text-left p-tag-padding">
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </p>
                    </Col>
                    <Col md="3" sm="3" xs="3">
                      <div className="subject-wrapper">
                        <h3 className=".p-tag-padding">English</h3>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="3" sm="3" xs="3">
                      <div className="teacher-img-wrapper">
                        <div className="img-wrapper">
                          <img src={userPic} className="img-raised" />
                          <p className="p-tag-padding">Teacher</p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" sm="6" xs="6">
                      <p className="text-left p-tag-padding">
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </p>
                    </Col>
                    <Col md="3" sm="3" xs="3">
                      <div className="subject-wrapper">
                        <h3 className=".p-tag-padding">English</h3>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="card-footer">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i>
                    Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </Col>

            <Col md="6" classNameName="text-center time-picker-outer">
              <div className="date-picker-wrapper">
                <Row>
                  <Col md="6" sm="6" xs="12">
                    <DateTimePicker
                      onChange={this.onChangeDate}
                      value={this.state.date}
                      className="dd"
                    />
                  </Col>
                  <Col md="6" sm="6" xs="12 teacher-calender-result">
                    <Button
                      className="btn btn-primary calender-student-diary"
                      onClick={this.handleClickOpen}
                    >
                      Calender Result
                    </Button>
                  </Col>
                </Row>
              </div>

              <div className="card card-timeline card-plain">
                <div className="card-body">
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="nc-icon nc-single-copy-04"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <span className="p-badge badge-danger badge-pill">
                            Some title
                          </span>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Wifey made the best Father's Day meal ever. So
                            thankful so happy so blessed. Thank you for making
                            my family We just had fun with the “future” theme
                            !!! It was a fun night all together ... The always
                            rude Kanye Show at 2am Sold Out Famous viewing @
                            Figueroa and 12th in downtown.
                          </p>
                        </div>
                        <div className="timeline-footer">
                          <h6>
                            <i className="fa fa-block-o"></i>
                            11 hours ago via Twitter
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-sun-fog-29"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <span className="p-badge badge-success badge-pill">
                            Another Title
                          </span>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Thank God for the support of my wife and real
                            friends. I also wanted to point out that it’s the
                            first album to go number 1 off of streaming!!! I
                            love you Ellen and also my number one design rule of
                            anything I do from shoes to music to homes is that
                            Kim has to like it....
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              {/* <div className="card"> */}
              <div className="txt-message-outer">
                <textarea
                  type="text"
                  placeholder="Write messages"
                  className="text-input-box"
                  onChange={this.onChangeEvent}
                  value={this.state.chatStore}
                  onKeyUp={this.textAreaAdjust}
                />
                <div className="file-container">
                  {/* <img src="/static/images/file-icon.svg" className="hover-effect-img" /> */}

                  <DropzoneComponent
                    config={componentConfig}
                    eventHandlers={eventHandlers}
                    djsConfig={djsConfig}
                  >
                    <div className="dz-message">
                      <img src={fileIcon} className="hover-effect-img" />
                    </div>
                  </DropzoneComponent>
                </div>

                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.dropdownToggle}
                >
                  <DropdownToggle caret className="txtBox-dropdown">
                    Select Subject
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>English</DropdownItem>
                    <DropdownItem disabled>Math</DropdownItem>
                    <DropdownItem>Hindi</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Diary</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <div className="btn-container send-btn">
                  {/* <img src="/static/images/at.svg" className="smiley" />
                    <img src="/static/images/smiley.svg" className="smiley" onClick={this.showEmojiEvent} /> */}

                  <a
                    href="#form"
                    className="btn add-company"
                    onClick={this.chatSubmit}
                  >
                    SEND
                    {/* <img src="/static/images/send-arrow.svg" className="hover-effect-img" /> */}
                  </a>
                </div>
              </div>
              {/* </div> */}
            </Col>
          </Row>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            className="forget-modal"
          >
            <DialogActions>
              <div
                onClick={this.handleClose}
                className="btn-default cross-icon"
              >
                x
              </div>
            </DialogActions>
            <DialogContent>Calender Detail</DialogContent>
          </Dialog>
        </div>
      </>
    );
  }
}

export default Diary;
