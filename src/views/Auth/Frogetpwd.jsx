import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Background from "../../assets/img/photo.jpg";
import "../style.css";
import "../../assets/sliderImages/style1.css";
import "../../assets/sliderImages/style2.css";
import "../../assets/sliderImages/style3.css";
import "../../assets/sliderImages/style4.css";

// Modal
// import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// var sectionStyle = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${Background})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover"
// };
class Forgetpwd extends React.Component {
  state = {
    // setOpen:false,
    open: false,
    email: "",
    error: null,
  };
  handleInput = (e) => {
    console.log("e", e.target.value);
    e.target.name = e.target.value;
    this.setState({
      email: e.target.name,
    });
  };
  //   Modal
  handleClickOpen = async () => {
    if (this.state.email == "") {
      await this.setState({
        error: "required",
        // open: true
        open: false,
      });
    } else if (this.state.email !== "") {
      await this.setState({
        open: true,
      });
    }
  };
  handleClose = () => {
    this.setState({
      //   setOpen:false,
      open: false,
    });
  };
  render() {
    console.log("this.state.open", this.state.open);

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
              <div className="forgot-wrapper">
                <h2>Forgot</h2>
                <h2>password?</h2>

                <p>
                  If you are unable to Login , please enter Username/Email Id &
                  select a desired option, where the new Auto-Generated password
                  will be sent.
                </p>

                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      defaultValue={this.state.email}
                      name="email"
                      onChange={(e) => this.handleInput(e)}
                      required
                      type="email"
                      placeholder="Enter Email Or UserName"
                    />
                    <div className="error-color">{this.state.error}</div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <div className="mb-3 lbl-outer">
                      <Form.Check
                        inline
                        label="Via Message"
                        type="radio"
                        name="a"
                      />
                      <Form.Check
                        inline
                        label="Via Mail"
                        type="radio"
                        name="a"
                      />
                    </div>
                  </Form.Group>

                  <Button
                    variant="outline-primary"
                    className="btn-width"
                    onClick={this.handleClickOpen}
                  >
                    SEND
                  </Button>
                </Form>
                {/* <div className="lbl-outer">
                                    <Form.Label>
                                        <Link to="/">LOGIN</Link></Form.Label>
                                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
        <Dialog
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
          <DialogContent>
            New password has been sent to registered abc.com
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default Forgetpwd;
