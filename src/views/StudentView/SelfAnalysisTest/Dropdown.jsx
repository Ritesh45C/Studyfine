import React from "react";
import { Card, Button, CardBody, Row, Col, Table } from "reactstrap";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Dropdowncls extends React.Component {
  state = {
    subject: false,
    topic: false,
    subTopic: false,
    tblShow: false,
  };
  handleChangeSubject = (cls) => {
    this.setState({
      subject: cls.target.value,
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
  callGo = () => {
    if (
      this.state.subject == "" &&
      this.state.topic == "" &&
      this.state.subTopic == ""
    ) {
      this.setState({
        tblShow: false,
      });
    } else {
      this.setState({
        tblShow: true,
      });
    }
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-stats custom-card-height">
              <CardBody className="custom-card-body card-bottom-padding">
                <Row>
                  <Col md="4">
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
                  <Col md="4">
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
                  <Col md="3">
                    <div className="syllabus-dropdown">
                      <FormControl>
                        <InputLabel id="demo-customized-select-label">
                          Select Subtopic
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
                  <Col md="1">
                    <Button
                      className="btn btn-primary check-btn"
                      onClick={this.callGo}
                    >
                      Go
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {this.state.tblShow ? (
          <Card className="card-stats custom-card-height">
            <CardBody className="custom-card-body">
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Subject</th>
                    <td>Science</td>
                  </tr>
                  <tr>
                    <th scope="row">Topic</th>
                    <td>Human Body</td>
                  </tr>
                  <tr>
                    <th scope="row">Subtopic</th>
                    <td>70% of water</td>
                  </tr>
                  <tr>
                    <td>No. of Questions</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>20 mins</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Dropdowncls;
