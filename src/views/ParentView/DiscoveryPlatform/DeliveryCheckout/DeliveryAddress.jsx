import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default class DeliveryAddress extends Component {
  render() {
    return (
      <div className="content">
        <Card className="deliveryLocation">
          <CardTitle tag="h5">Delivery Location</CardTitle>
          <br />
          <FormControl>
            <Select
              defaultValue={20}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Location"
            >
              <MenuItem value={10}>
                {" "}
                <HomeIcon /> &nbsp; Home
              </MenuItem>
              <MenuItem value={20}>
                <SchoolIcon /> &nbsp; School
              </MenuItem>
            </Select>
          </FormControl>
        </Card>
        <Row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Delivery Address</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Amit"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Gupta"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="ED-940, Sector-Q, Aliganj"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Lucknow"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="India"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="226024" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="row row-register-form">
                    <div
                      onClick={() => this.props.jumpToStep(1)}
                      className="register-btn"
                    >
                      Save
                    </div>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
