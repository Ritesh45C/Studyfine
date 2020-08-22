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

export default class Optional extends Component {
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
                  placeholder="Question (a)"
                  type="text"
                  name="Questiona"
                  id="exampleEmail"
                />
              </FormGroup>
              <FormGroup>
                {/* <Label for="examplePassword">Password</Label> */}
                <Input
                  type="text"
                  placeholder="Question (b)"
                  name="Questionb"
                  id="examplePassword"
                />
              </FormGroup>
              <Row>
                <div className="submit-btn">
                  {" "}
                  <Button type="submit" className="btn btn-primary">
                    Submit
                  </Button>
                </div>
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
