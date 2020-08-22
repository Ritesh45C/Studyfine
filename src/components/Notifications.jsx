import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import DoneIcon from "@material-ui/icons/Done";
import { Chip, Dialog } from "@material-ui/core";
import { withRouter } from "react-router";

import Selfanalysistest from "views/StudentView/SelfAnalysisTest/selfTest";

// reactstrap components
// import {
//   UncontrolledAlert,
//   Alert,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   Row,
//   Col,
// } from "reactstrap";

class Notifications extends React.Component {
  state = {
    visible: true,
    takeTest: false,
    close: false,
  };
  notificationAlert = React.createRef();
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Take the <b>Science Test</b> -Now. After 5 Minutes this notification
            will close Automatically.
          </div>
          <div className="takeTest">
            <Chip
              color="primary"
              label="Take Test"
              onClick={() => this.setState({ takeTest: true })}
              deleteIcon={<DoneIcon />}
            />
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 300,
    };
    this.notificationAlert.current.notificationAlert(options);
  }
  close = () => {
    this.setState({ takeTest: false });
  };

  render() {
    return (
      <>
        {this.props.turnon ? this.notify("tr") : ""}

        <div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          {this.state.takeTest ? (
            <Dialog open={this.state.takeTest} fullWidth={true} maxWidth="lg">
              <div style={{ padding: "60px 0" }}>
                <Selfanalysistest close={this.close} />
              </div>
            </Dialog>
          ) : null}

          {/* <Button block color="primary" onClick={() => this.notify("tr")}>
            Top Right
          </Button> */}
        </div>
      </>
    );
  }
}

export default withRouter(Notifications);
