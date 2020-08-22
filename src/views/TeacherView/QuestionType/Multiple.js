import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import DropzoneComponent from "react-dropzone-component";

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

export default class Multiple extends Component {
  render() {
    return (
      <div>
        <Row className="form-top-space">
          <Col md="1"></Col>
          <Col md="10">
            <Form className="create-paper-form">
              <FormGroup>
                {/* <Label for="exampleEmail">Email</Label> */}
                <Input
                  placeholder="Question"
                  type="text"
                  name="Question"
                  id="exampleEmail"
                />
              </FormGroup>
              <FormGroup>
                {/* <Label for="examplePassword">Password</Label> */}
                <Input
                  type="text"
                  placeholder="Option A"
                  name="Option1"
                  id="examplePassword"
                />
              </FormGroup>
              <Row>
                <Col md="9">
                  <FormGroup>
                    {/* <Label for="examplePassword">Password</Label> */}
                    <Input
                      placeholder="Option B"
                      type="text"
                      name="Option2"
                      id="examplePassword"
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="examplePassword">Password</Label> */}
                    <Input
                      placeholder="Option C"
                      type="text"
                      name="Option3"
                      id="examplePassword"
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="examplePassword">Password</Label> */}
                    <Input
                      placeholder="Correct Option"
                      type="text"
                      name="correctOption"
                      id="examplePassword"
                    />
                  </FormGroup>
                  <div className="submit-btn">
                    {" "}
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </div>
                </Col>
                <Col md="3">
                  <DropzoneComponent
                    config={componentConfig}
                    eventHandlers={eventHandlers}
                    djsConfig={djsConfig}
                  >
                    <div className="dz-message file-btn-css">Choose File</div>
                  </DropzoneComponent>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md="1"></Col>
        </Row>
      </div>
    );
  }
}
