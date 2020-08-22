import React, { Component } from "react";
import "./index.css";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

import { Row, Col } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Stationaryy extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col md="12">
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Stationary Item</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="product-grid2">
                        <div className="product-image2">
                          <a href="#">
                            <img
                              alt="pic"
                              className="pic-1"
                              src="https://5.imimg.com/data5/IW/VB/MY-40135739/natraj-pencil-500x500.jpg"
                            />
                            <img
                              alt="pic"
                              className="pic-2"
                              src="https://rukminim1.flixcart.com/image/416/416/k3j1z0w0/pen/k/b/z/cello-cel1010086-original-imafmmpfcyzvn6fr.jpeg?q=70"
                            />
                          </a>{" "}
                          <ul className="social">
                            <li>
                              <Link
                                onClick={() => this.setState({ open: true })}
                                data-tip="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="/parents/cart" data-tip="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                          <Link to="/parents/cart" className="add-to-cart">
                            Add to cart
                          </Link>
                        </div>
                        <div className="product-content">
                          <h3 className="title">
                            <a href="#">Stationary Item</a>
                          </h3>
                          <span className="price">₹599.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product-grid2">
                        <div className="product-image2">
                          <a href="#">
                            <img
                              alt="pic"
                              className="pic-1"
                              src="https://5.imimg.com/data5/IW/VB/MY-40135739/natraj-pencil-500x500.jpg"
                            />
                            <img
                              alt="pic"
                              className="pic-2"
                              src="https://rukminim1.flixcart.com/image/416/416/k3j1z0w0/pen/k/b/z/cello-cel1010086-original-imafmmpfcyzvn6fr.jpeg?q=70"
                            />
                          </a>
                          <ul className="social">
                            <li>
                              <Link
                                onClick={() => this.setState({ open: true })}
                                data-tip="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="/parents/cart" data-tip="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                          <a className="add-to-cart" href="">
                            Buy
                          </a>
                        </div>
                        <div className="product-content">
                          <h3 className="title">
                            <a href="#">Stationary Item</a>
                          </h3>
                          <span className="price">₹699.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product-grid2">
                        <div className="product-image2">
                          <a href="#">
                            <img
                              alt="pic"
                              className="pic-1"
                              src="https://5.imimg.com/data5/IW/VB/MY-40135739/natraj-pencil-500x500.jpg"
                            />
                            <img
                              alt="pic"
                              className="pic-2"
                              src="https://rukminim1.flixcart.com/image/416/416/k3j1z0w0/pen/k/b/z/cello-cel1010086-original-imafmmpfcyzvn6fr.jpeg?q=70"
                            />
                          </a>
                          <ul className="social">
                            <li>
                              <Link
                                onClick={() => this.setState({ open: true })}
                                data-tip="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="/parents/cart" data-tip="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                          <a className="add-to-cart" href="">
                            Buy
                          </a>
                        </div>
                        <div className="product-content">
                          <h3 className="title">
                            <a href="#">Stationary Item</a>
                          </h3>
                          <span className="price">₹599.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product-grid2">
                        <div className="product-image2">
                          <a href="#">
                            <img
                              alt="pic"
                              className="pic-1"
                              src="https://5.imimg.com/data5/IW/VB/MY-40135739/natraj-pencil-500x500.jpg"
                            />
                            <img
                              alt="pic"
                              className="pic-2"
                              src="https://rukminim1.flixcart.com/image/416/416/k3j1z0w0/pen/k/b/z/cello-cel1010086-original-imafmmpfcyzvn6fr.jpeg?q=70"
                            />
                          </a>
                          <ul className="social">
                            <li>
                              <Link
                                onClick={() => this.setState({ open: true })}
                                data-tip="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="/parents/cart" data-tip="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                          <a className="add-to-cart" href="">
                            Buy
                          </a>
                        </div>
                        <div className="product-content">
                          <h3 className="title">
                            <a href="#">Stationary Item</a>
                          </h3>
                          <span className="price">₹599.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <hr></hr>
            </Col>
          </Row>
        </div>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className="modal-content" style={{ width: "100%" }}>
            <div className="modal-header">
              <a href="#" data-dismiss="modal" className="class pull-right">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <h3 className="modal-title">Product Details</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 product_img">
                  <img
                    alt="pic"
                    className="img-responsive"
                    src="https://rukminim1.flixcart.com/image/612/612/j9hdn680/uniform-shirt/c/e/x/26-kyd-ncs-kendriya-vidyalaya-original-imaexp76gm3qnhmh.jpeg?q=70"
                  />
                </div>
                <div className="col-md-6 product_content">
                  <h4>
                    Product Id: <span>51526</span>
                  </h4>
                  <div className="rating">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    (10 reviews)
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                  <h3 className="cost">
                    <span className="glyphicon glyphicon-usd"></span> 75.00{" "}
                    <small className="pre-cost">
                      <span className="glyphicon glyphicon-usd"></span> 60.00
                    </small>
                  </h3>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <select className="form-control" name="select">
                        <option value="" selected="">
                          Size
                        </option>
                        <option value="black">M</option>
                        <option value="white">Xl</option>
                        <option value="gold">XXL</option>
                        <option value="rose gold">L</option>
                      </select>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <select className="form-control" name="select">
                        <option value="" selected="">
                          QTY
                        </option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-ten"></div>
                  <div className="btn-ground">
                    <button
                      onClick={() => this.props.history.push("/parents/cart")}
                      type="button"
                      className="btn btn-primary"
                    >
                      <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                      Add To Cart
                    </button>
                    <button
                      onClick={() => this.props.history.push("/parents/cart")}
                      type="button"
                      className="btn btn-primary"
                    >
                      <span className="glyphicon glyphicon-heart"></span>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(Stationaryy);
