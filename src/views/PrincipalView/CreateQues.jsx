import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import DropzoneComponent from "react-dropzone-component";
// import Dropdowncls from './TeacherMultiStep/Dropdown';
import Multichoiceques from "./PrinciMultiStep/Multichoiceques";
import Multinew from "./PrinciMultiStep/MultiNew";
import Simpleques from "./PrinciMultiStep/SimpleQues";
import Multiple from "views/TeacherView/QuestionType/Multiple";
import Optional from "views/TeacherView/QuestionType/Optional";
import Detail from "views/TeacherView/QuestionType/Detail";

// // File Upload
// var componentConfig = {
//   iconFiletypes: [".jpg", ".png", ".gif"],
//   showFiletypeIcon: false,
//   postUrl: "/uploadHandler",
//   thumbnail: true,
// };
// var djsConfig = {
//   autoProcessQueue: false,
//   params: { myParameter: "I'm a parameter!" },
// };

// var eventHandlers = {
//   addedfile: (file) => {
//     console.log("file", file.name);
//   },
//   thumbnail: false,
// };

// multi Step Form
const steps = [
  //   {component: <Dropdowncls />},
  { component: <Simpleques /> },
  { component: <Multichoiceques /> },
  { component: <Multinew /> },
];

class CreateQues extends React.Component {
  state = {
    class: "",
    subject: "",
    topic: "",
    subTopic: "",
    quesList: false,
    freeze: false,
    result: false,
    isOpen: false,
  };

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
      //   freeze: true,
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
  render() {
    console.log("this.state.open", this.state.isOpen);
    const d = this.props;
    console.log("d", d);
    var questionType = (
      <div>
        <Multiple />
      </div>
    );
    if (this.state.num === "Optional") {
      questionType = <Optional />;
    }
    if (this.state.num === "Detail") {
      questionType = <Detail />;
    }
    return (
      <div className="content">
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
                        <MenuItem value="Ten">Class1</MenuItem>
                        <MenuItem value="Twenty">Class2</MenuItem>
                        <MenuItem value="Thirty">Class3</MenuItem>
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
                        onChange={this.handleChangeSubject}
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
                        onChange={this.handleChangeSubject}
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
                      Select SubTopic
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
              <Col md="2">
                <div className="syllabus-dropdown">
                  <FormControl>
                    <InputLabel id="demo-customized-select-label">
                      Type Of Question
                    </InputLabel>
                    <Select
                      labelId="demo-customized-select-label"
                      value={this.state.age}
                      onChange={this.handleChangeNumber}
                    >
                      <MenuItem value="Detail">Detail</MenuItem>
                      <MenuItem value="Optional">Optional</MenuItem>
                      <MenuItem value="Multiple">Multiple</MenuItem>
                      <MenuItem value="Audio">Audio & Video</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="card-stats custom-card-height">
          <CardBody className="custom-card-body">
            {questionType}

            <div className="score-btn-right">
              <Button className="btn btn-primary" onClick={this.showResult}>
                Push
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* <div class="multistep-outer">
                        <StepZilla steps={ [
                            //   {component: <Dropdowncls />},
                            {component: <Simpleques/>},
                            {component: <Multichoiceques />},
                            {component: <Multinew />},
                            
                            ]
                        }/>
                    </div> */}
      </div>
    );
  }
}

export default CreateQues;
