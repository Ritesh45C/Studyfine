/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import userPic from "./../assets/img/profile.png";
import './style.css';

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            featureType: "water",
            stylers: [
              {
                saturation: 43
              },
              {
                lightness: -11
              },
              {
                hue: "#0088ff"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                hue: "#ff0000"
              },
              {
                saturation: -100
              },
              {
                lightness: 99
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#808080"
              },
              {
                lightness: 54
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ece2d9"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ccdca1"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#767676"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#b8cb93"
              }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.medical",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Shopping Cart Table</h5>
                </div>
                <div className="table-responsive">
                  <div className="el-table table-shopping el-table--fit el-table--enable-row-hover el-table--enable-row-transition" className="tbl-full-width">
                    <div className="hidden-columns">
                      <div>
                      </div>
                      <div>
                      </div>
                      <div className="td-price">

                      </div>

                      <div className="td-number td-quantity">

                      </div>
                      <div>
                      </div>
                    </div>
                    <div className="el-table__header-wrapper">
                      <table cellspacing="0" cellpadding="0" border="0" className="el-table__header" className="tbl-custom-width">
                        <colgroup>
                          <col name="el-table_3_column_11" width="183" />
                          <col name="el-table_3_column_12" width="332" />
                          <col name="el-table_3_column_13" width="120" />
                          <col name="el-table_3_column_14" width="226" />
                          <col name="el-table_3_column_15" width="151" />
                          <col name="gutter" width="0" />
                        </colgroup>
                        <thead className="has-gutter">
                          <tr>
                            <th colspan="1" rowspan="1" className="el-table_3_column_11 is-leaf">
                              <div className="cell">
                              </div>
                            </th>
                            <th colspan="1" rowspan="1" className="el-table_3_column_12   td-name  is-leaf">
                              <div className="cell">
                              </div>
                            </th>
                            <th colspan="1" rowspan="1" className="el-table_3_column_13   td-number  is-leaf">
                              <div className="cell">Price</div>
                            </th>
                            <th colspan="1" rowspan="1" className="el-table_3_column_14   td-number  is-leaf">
                              <div className="cell">QTY</div>
                            </th>
                            <th colspan="1" rowspan="1" className="el-table_3_column_15   td-number  is-leaf">
                              <div className="cell">Total</div>
                            </th>
                            <th className="gutter" className="width-display-none">
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="el-table__body-wrapper is-scrolling-none">
                      <table cellspacing="0" cellpadding="0" border="0" className="el-table__body tbl-custom-width">
                        <colgroup>
                          <col name="el-table_3_column_11" width="183" />
                          <col name="el-table_3_column_12" width="332" />
                          <col name="el-table_3_column_13" width="120" />
                          <col name="el-table_3_column_14" width="226" />
                          <col name="el-table_3_column_15" width="151" />
                        </colgroup>
                        <tbody>
                          <tr className="el-table__row">
                            <td rowspan="1" colspan="1" className="el-table_3_column_11  ">
                              <div className="cell">
                                <div className="img-container">
                                  <img src={userPic} alt="Agenda" />
                                </div>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_12  td-name">
                              <div className="cell">
                                <a>Notebook</a><br />
                                <small>Most beautiful agenda for the office.</small>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_13  td-number">
                              <div className="cell"><small>€</small> 49
                                  </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_14  td-number">
                              <div className="cell">
                                1
                                  <div className="btn-group btn-group-sm">
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-delete"></i>
                                  </button>
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-add"></i>
                                  </button></div>
                              </div></td>

                            <td rowspan="1" colspan="1" className="el-table_3_column_15  td-number">
                              <div className="cell"><strong><small>€</small> 49 </strong></div>
                            </td></tr>
                          <tr className="el-table__row">
                            <td rowspan="1" colspan="1" className="el-table_3_column_11  ">
                              <div className="cell">
                                <div className="img-container">
                                  <img src={userPic} alt="Agenda" />
                                </div>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_12  td-name">
                              <div className="cell">
                                <a>Stylus</a><br />
                                <small>Design is not just what it looks like and feels like. Design is how it works.</small>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_13  td-number">
                              <div className="cell">
                                <small>€</small> 499
                                </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_14  td-number">
                              <div className="cell">
                                2
                                  <div className="btn-group btn-group-sm">
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-delete"></i>
                                  </button>
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-add"></i>
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_15  td-number">
                              <div className="cell"><strong><small>€</small> 998 </strong></div>
                            </td></tr>
                          <tr className="el-table__row">
                            <td rowspan="1" colspan="1" className="el-table_3_column_11  ">
                              <div className="cell"><div className="img-container">
                                <img src={userPic} alt="Agenda" /></div>
                              </div></td><td rowspan="1" colspan="1" className="el-table_3_column_12  td-name">
                              <div className="cell"><a>Evernote iPad Stander</a><br />
                                <small>A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.</small></div></td><td rowspan="1" colspan="1" className="el-table_3_column_13  td-number"><div className="cell"><small>€</small> 799
                                </div></td><td rowspan="1" colspan="1" className="el-table_3_column_14  td-number">
                              <div className="cell">
                                1
                                  <div className="btn-group btn-group-sm">
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-delete"></i>
                                  </button>
                                  <button type="button" className="btn btn-outline-default btn-round btn-default btn-sm">
                                    <i className="nc-icon nc-simple-add"></i></button>
                                </div>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" className="el-table_3_column_15  td-number">
                              <div className="cell">
                                <strong>
                                  <small>€</small> 799 </strong>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="el-table__footer-wrapper">
                      <table cellspacing="0" cellpadding="0" border="0" className="el-table__footer tbl-custom-width">
                        <colgroup>
                          <col name="el-table_3_column_11" width="183" />
                          <col name="el-table_3_column_12" width="332" />
                          <col name="el-table_3_column_13" width="120" />
                          <col name="el-table_3_column_14" width="226" />
                          <col name="el-table_3_column_15" width="151" />
                          <col name="gutter" width="0" />
                        </colgroup>
                        <tbody className="has-gutter"><tr><td colspan="1" rowspan="1" className="el-table_3_column_11 is-leaf">
                          <div className="cell">Total</div></td><td colspan="1" rowspan="1" className="el-table_3_column_12 td-name is-leaf">
                            <div className="cell"></div></td><td colspan="1" rowspan="1" className="el-table_3_column_13 td-number is-leaf"><div className="cell"></div></td><td colspan="1" rowspan="1" className="el-table_3_column_14 td-number is-leaf"><div className="cell"></div></td><td colspan="1" rowspan="1" className="el-table_3_column_15 td-number is-leaf">
                            <div className="cell">€ 1846</div></td><th className="gutter width-display-none">
                          </th></tr></tbody>
                      </table></div><div className="el-table__column-resize-proxy display-none">
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;
