import React from "react";
import { Card, CardBody, Row, Col, Collapse } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DropzoneComponent from "react-dropzone-component";
import DataJson from "./StudentData/Data.json";
import ListSubheader from "@material-ui/core/ListSubheader";
import DateTimePicker from "react-datetime-picker";

// Modal
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import SketchExample from "Canvas";

// File Upload
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

class Homework extends React.Component {
  state = {
    class: "",
    subject: "",
    topic: "",
    subTopic: "",
    quesList: false,
    freeze: false,
    result: false,
    isOpen: false,
    date: new Date(),
    open: false,
  };
  onChangeDate = (date) => this.setState({ date });

  handleChangeClass = (cls) => {
    this.setState({
      class: cls.target.values,
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
      freeze: true,
    });

    // if((this.state.class == '' || undefined) && (this.state.subject == '' || undefined) && (this.state.topic == '' || undefined) && (this.state.subTopic == '' || undefined)){
    //     this.setState({
    //         quesList:false
    //     })
    // }
    // else{
    //     this.setState({
    //         quesList:true
    //     })
    // }
  };
  showResult = () => {
    this.setState({
      result: true,
    });
  };
  toggle = () => {
    console.log("toggle");
    this.setState({
      isOpen: !this.state.isOpen,
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
    console.log("this.state.open", this.state.isOpen);
    const d = this.props;
    console.log("d", d);
    return (
      <div className="content">
        <Card>
          <CardBody className="custom-card-body card-bottom-padding">
            <Row>
              <Col md="2">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Class
                    </InputLabel>
                    {this.state.freeze ? (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeClass}
                        disabled={true}
                      >
                        <MenuItem value="Ten">Class1</MenuItem>
                        <MenuItem value="Twenty">Class2</MenuItem>
                        <MenuItem value="Thirty">Class3</MenuItem>
                      </Select>
                    ) : (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeClass}
                      >
                        <ListSubheader>Class 1</ListSubheader>
                        <MenuItem value={1}>Section A</MenuItem>
                        <MenuItem value={2}>Section B</MenuItem>
                        <ListSubheader>Class 2</ListSubheader>
                        <MenuItem value={3}>Section C</MenuItem>
                        <MenuItem value={4}>Section D</MenuItem>

                        {/* <MenuItem value="Ten">Class1                                                            
                                                            </MenuItem>
                                                            <MenuItem value="Twenty">Class2</MenuItem>
                                                            <MenuItem value="Thirty">Class3</MenuItem> */}
                      </Select>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md="2">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Name
                    </InputLabel>
                    {this.state.freeze ? (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeSubject}
                        disabled={true}
                      >
                        <MenuItem value="Ten">S1</MenuItem>
                        <MenuItem value="Twenty">S2</MenuItem>
                        <MenuItem value="Thirty">S3</MenuItem>
                      </Select>
                    ) : (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeSubject}
                      >
                        <MenuItem value="Ten">S1</MenuItem>
                        <MenuItem value="Twenty">S2</MenuItem>
                        <MenuItem value="Thirty">S3</MenuItem>
                      </Select>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md="2">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Subject
                    </InputLabel>
                    {this.state.freeze ? (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeTopic}
                        disabled={true}
                      >
                        <MenuItem value="Ten">English</MenuItem>
                        <MenuItem value="Twenty">Hindi</MenuItem>
                        <MenuItem value="Thirty">Science</MenuItem>
                      </Select>
                    ) : (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeTopic}
                      >
                        <MenuItem value="Ten">English</MenuItem>
                        <MenuItem value="Twenty">Hindi</MenuItem>
                        <MenuItem value="Thirty">Science</MenuItem>
                      </Select>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md="2">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Select Topic
                    </InputLabel>
                    {this.state.freeze ? (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeSubTopic}
                        disabled={true}
                      >
                        <MenuItem value="Ten">English</MenuItem>
                        <MenuItem value="Twenty">Hindi</MenuItem>
                        <MenuItem value="Thirty">Science</MenuItem>
                      </Select>
                    ) : (
                      <Select
                        labelId="demo-customized-select-label"
                        value={this.state.age}
                        onChange={this.handleChangeSubTopic}
                      >
                        <MenuItem value="Ten">English</MenuItem>
                        <MenuItem value="Twenty">Hindi</MenuItem>
                        <MenuItem value="Thirty">Science</MenuItem>
                      </Select>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md="4">
                <div className="date-picker-wrapper-teacher">
                  <DateTimePicker
                    onChange={this.onChangeDate}
                    value={this.state.date}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="4 space-top-syllabus">
                <Button
                  className="btn btn-primary calender-show-teacher"
                  onClick={this.handleClickOpen}
                >
                  Calender Result
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="card-stats custom-card-height">
          {this.state.open ? (
            <CardBody className="custom-card-body">
              <Row className="form-top-space">
                <Col md="1"></Col>
                <Col md="10">
                  <SketchExample data={DataJson} />
                </Col>
                <Col md="1"></Col>
              </Row>
              )}
              <div className="score-btn-right">
                <Button className="btn btn-primary" onClick={this.handleClose}>
                  Submit
                </Button>
              </div>
            </CardBody>
          ) : null}
        </Card>

        {/* <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className="forget-modal"
        >
          <DialogActions>
            <div onClick={this.handleClose} className="btn-default cross-icon">
              x
            </div>
          </DialogActions>
          <DialogContent>Calender Detail</DialogContent>
        </Dialog> */}
      </div>
    );
  }
}

export default Homework;
