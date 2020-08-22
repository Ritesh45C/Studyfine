import React from "react";
import "./index.css";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { withRouter } from "react-router";

import { green } from "@material-ui/core/colors";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

class Multinew extends React.Component {
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.props.pause();

    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    if (this.props.close) {
      this.props.close();
    }
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div>
        <Card className="card-stats custom-card-height">
          <CardBody className="custom-card-body">
            <Form>
              <FormGroup>
                <legend> What is PHP?</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Framework
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Library
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Scripting Language
                  </Label>
                </FormGroup>
                <div class="score-btn-right">
                  {" "}
                  <Button
                    onClick={this.handleClickOpen}
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className="forget-modal"
        >
          <DialogActions>
            <div onClick={this.handleClose} className="close-pdf">
              Close
            </div>
          </DialogActions>
          <DialogContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckCircleRoundedIcon
                fontSize="large"
                style={{ color: green[500] }}
              />
              <div
                style={{ fontSize: "25px", fontWeight: 500, padding: "25px" }}
              >
                Congratulations, you passed!
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <table class="tg">
                <tr>
                  <th class="tg-kj2m">Q.no</th>
                  <th class="tg-4t0x">Correct Ans.</th>
                  <th class="tg-p2i2">Your Ans.</th>
                </tr>
                <tr>
                  <td class="tg-kj2m">2</td>
                  <td class="tg-4t0x">a</td>
                  <td class="tg-p2i2">b</td>
                </tr>
                <tr>
                  <td class="tg-kj2m">3</td>
                  <td class="tg-4t0x">c</td>
                  <td class="tg-p2i2">d</td>
                </tr>
                <tr>
                  <td class="tg-kj2m">5</td>
                  <td class="tg-4t0x">a</td>
                  <td class="tg-p2i2">e</td>
                </tr>
              </table>
              <br />
              <br />
              <table class="tg">
                <tr>
                  <th class="tg-0pky">Total Questions</th>
                  <th class="tg-0pky">11</th>
                </tr>
                <tr>
                  <td class="tg-0pky">Total Score</td>
                  <td class="tg-0pky">110</td>
                </tr>
                <tr>
                  <td class="tg-0pky">Your Score</td>
                  <td class="tg-0pky">90</td>
                </tr>
                <tr>
                  <td class="tg-0pky">Passing Score</td>
                  <td class="tg-0pky">80</td>
                </tr>
              </table>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(Multinew);
