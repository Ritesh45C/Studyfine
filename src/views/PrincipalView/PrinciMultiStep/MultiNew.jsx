import React from "react";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

class Multinew extends React.Component {
  state = {
    open: false,
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
    return (
      <div>
        {/* <Button className="btn btn-primary" onClick={this.handleClickOpen}>
                            My Scores
                        </Button> */}
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
            <div onClick={this.handleClose} className="btn-default cross-icon">
              x
            </div>
          </DialogActions>
          <DialogContent>Your Total Score is 20</DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Multinew;
