import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { green } from "@material-ui/core/colors";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateTimePicker from "react-datetime-picker";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import {
  Row,
  Col,
  Input,
  Button as BootsButton,
  Card,
  InputGroupAddon,
  InputGroupText,
  CardHeader,
  InputGroup,
  CardBody,
  CardTitle,
} from "reactstrap";
import MyMapComponent from "components/GoogleMap/GoogleMap";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SecureCab() {
  const [open, setOpen] = React.useState(true);
  const [mapShow, setmapShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [timer, setTimer] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(false);
    setmapShow(true);
  };
  const onChangeDate = (date) => setDate({ date });

  const handleClose = () => {
    setOpen(false);
  };
  const primary = green[500];

  const timeout = () => {
    setTimeout(() => {
      window.confirm("Do you want a regular cab on the same time ?");
    }, 6000);
  };

  return (
    <div className="content">
      {mapShow ? (
        <>
          {timeout()}
          <MyMapComponent />

          <Card className="card-cab">
            <CardHeader>
              <CardTitle className="cabHeading">
                {" "}
                <DirectionsCarIcon /> <div>Cab Location</div>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Row style={{ margin: "auto", padding: "10px" }}>
                <Col className="pr-1" md="10">
                  <DateTimePicker
                    // onChange={onChangeDate}
                    value={date}
                    className="dd"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="10">
                  <InputGroup>
                    {/* <label>Pick Up</label> */}
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {" "}
                        <SchoolIcon />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Pick Up" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <div style={{ textAlign: "center", margin: "10px 0" }}>
                <DirectionsCarIcon style={{ fill: primary }} />
                <br />
                <DragIndicatorIcon />
              </div>
              <Row>
                <Col className="pr-1" md="10">
                  <InputGroup>
                    {/* <label>Pick Up</label> */}
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {" "}
                        <HomeIcon />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Drop" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="10">
                  <InputGroup>
                    {/* <label>Pick Up</label> */}
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {" "}
                        <LocationOnIcon />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Current Location" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <BootsButton
                className="btn"
                size="lg"
                block
                color="success"
                type="submit"
              >
                Search
              </BootsButton>
            </CardBody>
          </Card>
        </>
      ) : (
        ""
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Opt-in for your Child's Security"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Secure cab facility- with camera built in cars for your child
            security
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Not Needed
          </Button>
          <div class=" margin">
            <button
              onClick={handleClickOpen}
              target="_blank"
              className="themeBtn"
            >
              Opt-In
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
