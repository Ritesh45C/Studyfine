import React, { Component } from "react";
import StepZilla from "react-stepzilla";
import { CardBody, Card, Row, Col } from "reactstrap";

import DeliveryAddress from "./DeliveryAddress";
import VerticalTabs from "views/ParentView/PayFee/PaymentUI";
export default class DeliveryCheckout extends Component {
  render() {
    var steps = [
      { name: "Address", component: <DeliveryAddress /> },
      {
        name: "Payment",
        component: (
          <div className="paymentCenter">
            <VerticalTabs />{" "}
          </div>
        ),
      },
    ];
    return (
      <div className="content">
        <Row>
          <Col md="3">
            <h4>Checkout</h4>
          </Col>
        </Row>

        <StepZilla stepsNavigation={true} showSteps={true} steps={steps} />
      </div>
    );
  }
}
