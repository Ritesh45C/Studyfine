import React from "react";
// react plugin used to create google maps
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
// reactstrap components
import { Row, Col } from "reactstrap";
import "../../style.css";
import img from "../../../assets/img/shopping-book.jpg";
import { green } from "@material-ui/core/colors";
import Stationary from "./Stationary";
import "./index.css";
import Stationaryy from "./Stationaryy";

class DiscoverPlatform extends React.Component {
  state = {
    open: false,
  };

  // PDF
  handleOpenPdf = () => {
    this.setState({ open: true });
  };
  handleClosePdf = () => {
    this.setState({ open: false });
  };

  render() {
    const primary = green[500];
    return (
      <>
        <div className="content">
          <div className="container">
            <br />
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <form className="card card-sm">
                  <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                      <i className="fas fa-search" />
                    </div>
                    <div className="col">
                      <input
                        className="form-control form-control-lg form-control-borderless"
                        type="search"
                        placeholder="Search Items or Shops"
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-lg btn-success" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Stationary />
          <Stationaryy />
        </div>
      </>
    );
  }
}

export default DiscoverPlatform;
