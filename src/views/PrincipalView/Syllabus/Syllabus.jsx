import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";

import LinearDeterminate from "../../../components/ProgressBar/ProgressBar";

class SyllabusData extends React.Component {
  state = {
    age: "",
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <h3>{this.props.data}</h3>
            <Card>
              <CardBody>
                <Row>
                  <Col md="12">
                    <ul className="progress-bar-wrapper">
                      <li>
                        {" "}
                        <h3>Math</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <LinearDeterminate />
                        <span>100%</span>
                      </li>
                      <li>
                        <h3>English</h3>&nbsp; <LinearDeterminate />
                        <span>100%</span>
                      </li>
                      <li>
                        <h3>Science</h3> <LinearDeterminate />
                        <span>100%</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SyllabusData;
