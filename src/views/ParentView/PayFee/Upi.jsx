import React, { Component } from "react";

export default class Upi extends Component {
  render() {
    return (
      <div>
        <div
          className="container"
          style={{ paddingTop: "28px", paddingLeft: "90px" }}
        >
          <div className="row">
            <div className="paymentCont">
              <div className="headingWrap">
                <h3 className="headingTop text-center">Select Your Wallet</h3>
                <p className="text-center">
                  Pay your Child fee Securely and hassle-free
                </p>
              </div>
              <div className="paymentWrap">
                <div
                  className="btn-group paymentBtnGroup btn-group-justified"
                  data-toggle="buttons"
                >
                  <label className="btn paymentMethod ">
                    <div className="method gpay"></div>
                    <input type="radio" name="options" checked />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method paytm"></div>
                    <input type="radio" name="options" />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method ppay"></div>
                    <input type="radio" name="options" />
                  </label>
                </div>
              </div>
              <div className="footerNavWrap clearfix">
                <div className="btn btn-success pull-left btn-fyi">
                  <span className="glyphicon glyphicon-chevron-left"></span>{" "}
                  Cancel
                </div>
                <div className="btn btn-success pull-right btn-fyi">
                  Continue
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
