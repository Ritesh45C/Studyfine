import React from "react";
import { Row, Col } from "reactstrap";
import "./Report.css";
import ReportCard from "./ReportCard";

class Report extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content">
          <Row className="centerreport">
            <Col className="text-center ">
              <ReportCard />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Report;
