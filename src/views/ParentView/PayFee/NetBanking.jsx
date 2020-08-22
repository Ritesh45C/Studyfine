import React, { Component } from "react";
import "./NetBanking.css";
export default class NetBanking extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: "48px" }}>
          <div className="row">
            <div className="paymentCont">
              <div className="headingWrap">
                <h3 className="headingTop text-center">Select Your Bank</h3>
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
                    <div className="method visa"></div>
                    <input type="radio" name="options" checked />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method master-card"></div>
                    <input type="radio" name="options" />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method amex"></div>
                    <input type="radio" name="options" />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method vishwa"></div>
                    <input type="radio" name="options" />
                  </label>
                  <label className="btn paymentMethod">
                    <div className="method ez-cash"></div>
                    <input type="radio" name="options" />
                  </label>
                </div>
              </div>
              <div className="footerNavWrap clearfix">
                <div className="btn btn-success pull-left btn-fyi">
                  <span className="glyphicon glyphicon-chevron-left"></span>{" "}
                  CANCEL
                </div>
                <div className="btn btn-success pull-right btn-fyi">
                  CONTINUE
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
