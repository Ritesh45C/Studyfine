import React, { Component } from "react";

export default class PaymentForm extends Component {
  render() {
    return (
      <div>
        <div className=" panel-default credit-card-box">
          <div className="display-table">
            <div className="row display-tr">
              <h3 className="panel-title display-td">{this.props.name}</h3>
              <div className="display-td">
                <img
                  alt=""
                  className="img-responsive pull-right"
                  src="http://i76.imgup.net/accepted_c22e0.png"
                />
              </div>
            </div>
            <div className="panel-body">
              <form style={{ paddingTop: "48px" }} id="payment-form">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label for="cardNumber">CARD NUMBER</label>
                      <div className="input-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="cardNumber"
                          placeholder="Valid Card Number"
                          autocomplete="cc-number"
                          required
                          autofocus
                        />
                        <span className="input-group-text" id="basic-addon2">
                          <i className="fa fa-credit-card"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ alignItems: "flex-end" }}>
                  <div className="col">
                    <div className="form-group">
                      <label for="cardExpiry">
                        <span className="hidden-xs">EXPIRATION</span>
                        <span className="visible-xs-inline">EXP</span> DATE
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="cardExpiry"
                        placeholder="MM / YY"
                        autocomplete="cc-exp"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <label for="cardCVC">CV CODE</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="cardCVC"
                        placeholder="CVC"
                        autocomplete="cc-csc"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label for="couponCode">COUPON CODE</label>
                      <input
                        type="text"
                        className="form-control"
                        name="couponCode"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Pay Fee
                    </button>
                  </div>
                </div>
                <div className="row" style={{ display: "none" }}>
                  <div className="col-xs-12">
                    <p className="payment-errors"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
