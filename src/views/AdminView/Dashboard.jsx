import React from "react";
// import "./Executive.css";
// reactstrap components
// core components

class Register extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="card card-admin-paper">
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats card-admin">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-hat-3 text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <h3 style={{ color: "white" }}>Register School</h3>
                      </div>
                    </div>
                    <div className="row row-register">
                      <div
                        onClick={() =>
                          this.props.history.push("/admin/school-register")
                        }
                        className="register-btn"
                      >
                        Register Now
                      </div>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fa fa-calendar-o"></i>
                      Last day
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row registerHeading">
            <h3 className="display-4" style={{ paddingLeft: "20px" }}>
              Registration
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-parent">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-02 text-warning"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Principal</h3>
                    </div>
                  </div>
                  <div className="row row-register">
                    <div
                      onClick={() =>
                        this.props.history.push("/executive/register")
                      }
                      className="register-btn"
                    >
                      Register Now
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh"></i>
                    Update Now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-school">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-hat-3 text-success"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Student</h3>
                    </div>
                  </div>
                  <div className="row row-register">
                    <div
                      onClick={() =>
                        this.props.history.push("/executive/register")
                      }
                      className="register-btn"
                    >
                      Register Now
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o"></i>
                    Last day
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-prinicpal">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Teachers</h3>
                    </div>
                  </div>
                  <div className="row row-register">
                    <div
                      onClick={() =>
                        this.props.history.push("/executive/register")
                      }
                      className="register-btn"
                    >
                      Register Now
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i>
                    In the last hour
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-prinicpal">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Parents</h3>
                    </div>
                  </div>
                  <div className="row row-register">
                    <div
                      onClick={() =>
                        this.props.history.push("/executive/register")
                      }
                      className="register-btn"
                    >
                      Register Now
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i>
                    In the last hour
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row registerHeading">
            <h3 className="display-4" style={{ paddingLeft: "20px" }}>
              Bulk Registration Upload CSV/xlsx
            </h3>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-parent">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-02 text-warning"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Parents</h3>
                    </div>
                  </div>
                  <div className="row row-upload">
                    <input type="file" className="uploadfile" />
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh"></i>
                    Update Now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-school">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-hat-3 text-success"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Student</h3>
                    </div>
                  </div>
                  <div className="row row-upload">
                    <input type="file" className="uploadfile" />
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o"></i>
                    Last day
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats card-prinicpal">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <h3 style={{ color: "white" }}>Register Teachers</h3>
                    </div>
                  </div>
                  <div className="row row-upload">
                    <input type="file" className="uploadfile" />
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i>
                    In the last hour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
