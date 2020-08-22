import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
// import Background from '../assets/img/photo.jpg';
import Background from "../../assets/img/photo.jpg";
import "../../assets/sliderImages/style1.css";

import "../../assets/sliderImages/style2.css";
import "../../assets/sliderImages/style3.css";
import "../../assets/sliderImages/style4.css";
import { getGeneratedNameForNode } from "typescript";
// import {
//     Container, Row, Col, Form, Button
//   } from "reactstrap";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
class Login extends React.Component {
  state = {
    person: {
      name: "",
      pwd: "",
    },
    nameError: null,
    pwdError: null,
  };
  handleInput = (e) => {
    console.log("e", e.target.value);
    const { person } = this.state;
    person[e.target.name] = e.target.value;
    this.setState({
      person,
    });
  };
  handleSubmit = () => {
    const { person } = this.state;
    if (person.name == "") {
      this.setState({
        nameError: "required",
        pwdError: null,
      });
    } else if (
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        person.name
      ) == false
    ) {
      this.setState({
        nameError: "Please Enter Valid Email",
        pwdError: null,
      });
    } else if (person.pwd == "") {
      this.setState({
        nameError: null,
        pwdError: "required",
      });
    } else if (person.pwd.length < 6) {
      console.log("person.pwd.length", person.pwd.length);
      this.setState({
        nameError: null,
        pwdError: "password length should be minimum 6",
      });
    } else {
      this.props.history.push("/student/dashboard");
      // window.location.href = "/student/dashboard";  wrong way of redirecting
    }
  };
  render() {
    const { person, nameError, pwdError } = this.state;
    console.log("this.state.person", this.state.person);

    return (
      <div>
        <ul class="cb-slideshow">
          <li>
            <span>Image 01</span>
            <div>
              <h3></h3>
            </div>
          </li>
          <li>
            <span>Image 02</span>
            <div>
              <h3></h3>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <h3></h3>
            </div>
          </li>
          <li>
            <span>Image 04</span>
            <div>
              <h3></h3>
            </div>
          </li>
          <li>
            <span>Image 05</span>
            <div>
              <h3></h3>
            </div>
          </li>
          <li>
            <span>Image 06</span>
            <div>
              <h3></h3>
            </div>
          </li>
        </ul>
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div className="Login-wrapper">
                <h2>Log in</h2>
                <Form>
                  <Form.Group>
                    <Form.Control
                      defaultValue={this.state.person.name}
                      value={person.name}
                      name="name"
                      type="email"
                      onChange={(e) => this.handleInput(e)}
                      placeholder="Username"
                    />
                    <div className="error-color">{nameError}</div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      defaultValue={this.state.person.pwd}
                      value={person.pwd}
                      name="pwd"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => this.handleInput(e)}
                    />
                    <div className="error-color">{pwdError}</div>
                  </Form.Group>

                  {/* <Button variant="outline-primary" className="btn-width">Log In</Button> */}
                  <div className="login-btn-outer">
                    <Link
                      to="#"
                      className="btn-width login-btn"
                      onClick={this.handleSubmit}
                    >
                      Log In
                    </Link>
                  </div>
                </Form>
                <Form.Label>
                  <Link to="/forget">Forget your password?</Link>
                </Form.Label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
