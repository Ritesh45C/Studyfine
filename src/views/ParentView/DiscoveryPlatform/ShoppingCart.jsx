import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="content">
        <div className="cart-wrap" style={{ background: "white" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="main-heading">Shopping Cart</div>
                <div className="table-cart">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="https://3.imimg.com/data3/HG/TH/MY-4974643/school-uniform-blazers-500x500.jpg"
                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">
                              School Uniform
                              <br />
                              G2356
                            </div>
                            <div className="price">₹599.99</div>
                          </div>
                        </td>
                        <td className="product-count">
                          <form action="#" className="count-inlineflex">
                            <div className="qtyminus">-</div>
                            <input
                              type="text"
                              name="quantity"
                              value="1"
                              className="qty"
                            />
                            <div className="qtyplus">+</div>
                          </form>
                        </td>
                        <td>
                          <div className="total">₹1100.00</div>
                        </td>
                        <td>
                          <a href="#" title="">
                            <img
                              src="images/icons/delete.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="https://rukminim1.flixcart.com/image/416/416/k3j1z0w0/pen/k/b/z/cello-cel1010086-original-imafmmpfcyzvn6fr.jpeg?q=70"
                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">
                              Stationary Item
                              <br />
                              G2356
                            </div>
                            <div className="price">₹599.99</div>
                          </div>
                        </td>
                        <td className="product-count">
                          <form action="#" className="count-inlineflex">
                            <div className="qtyminus">-</div>
                            <input
                              type="text"
                              name="quantity"
                              value="1"
                              className="qty"
                            />
                            <div className="qtyplus">+</div>
                          </form>
                        </td>
                        <td>
                          <div className="total">₹1100.00</div>
                        </td>
                        <td>
                          <a href="/" title="">
                            <img
                              src="images/icons/delete.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="coupon-box">
                    <form action="#" method="get" accept-charset="utf-8">
                      <div className="coupon-input">
                        <input
                          type="text"
                          name="coupon code"
                          placeholder="Coupon Code"
                        />
                        <button type="submit" className="round-black-btn">
                          Apply Coupon
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart-totals">
                  <h3>Cart Totals</h3>
                  <form action="#" method="get" accept-charset="utf-8">
                    <table>
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td className="subtotal">₹1100.00</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td className="free-shipping">Free Shipping</td>
                        </tr>
                        <tr className="total-row">
                          <td>Total</td>
                          <td className="price-total">₹1,591.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="btn-cart-totals">
                      <a href="#" className="update round-black-btn" title="">
                        Update Cart
                      </a>
                      <Link
                        to="/parents/checkout"
                        className="checkout round-black-btn"
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
