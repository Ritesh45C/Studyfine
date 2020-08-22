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

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import userPic from "./../assets/img/profile.png";
import fileIcon from "./../assets/img/file-icon.svg";
import './style.css';
import DateTimePicker from 'react-datetime-picker';
import DropzoneComponent from 'react-dropzone-component';

var componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: false,
  postUrl: '/uploadHandler',
  thumbnail: true,
};
var djsConfig = {
  autoProcessQueue: false,
  params: { myParameter: "I'm a parameter!" }
}

var eventHandlers = {
  addedfile: (file) => { console.log('file', file.name) },
  thumbnail: false
}

class Icons extends React.Component {
  state = {
    date: new Date(),
  }


  onChange = date => this.setState({ date })
  render() {
    console.log("Date", new Date());
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6" className="text-center">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Teachers</h4>
                  <p className="category">Backend development</p>
                </div>
                <div className="card-body">
                  <div className="table-full-width table-tasks">
                    <table className="table">
                      <tbody>

                        <tr>
                          <td>
                            <div className="form-check"><label for="cfc514fd779d5" className="form-check-label">
                              <input id="cfc514fd779d5" type="checkbox" className="form-check-input" />
                              <span className="form-check-sign"></span>
                            </label>
                            </div>
                          </td>
                          <td className="img-row">

                            <div className="img-wrapper">
                              <img src={userPic} className="img-raised" />
                            </div>
                          </td>
                          <td className="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                          <td className="td-actions text-right">
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-info" aria-label="edit button" tabindex="0">
                              <i className="nc-icon nc-ruler-pencil"></i>
                            </button>
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-danger" aria-label="remove button" aria-describedby="el-tooltip-6418" tabindex="0">
                              <i className="nc-icon nc-simple-remove"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label for="b50c875c76a76" className="form-check-label">
                                <input id="b50c875c76a76" type="checkbox" className="form-check-input" />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img src={userPic} className="img-raised" />
                            </div>
                          </td>
                          <td className="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                          <td className="td-actions text-right">
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-info" aria-label="edit button" aria-describedby="el-tooltip-7219" tabindex="0">
                              <i className="nc-icon nc-ruler-pencil"></i>
                            </button><button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-danger" aria-label="remove button" aria-describedby="el-tooltip-6073" tabindex="0">
                              <i className="nc-icon nc-simple-remove"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label for="5d01b0fd5862e" className="form-check-label">
                                <input id="5d01b0fd5862e" type="checkbox" className="form-check-input" />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="img-row"><div className="img-wrapper">
                            <img src={userPic} className="img-raised" />
                          </div>
                          </td>
                          <td className="text-left">Using dummy content or fake information in the Web design process can result in products with unrealistic</td>
                          <td className="td-actions text-right">
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-info" aria-label="edit button" aria-describedby="el-tooltip-6243" tabindex="0">
                              <i className="nc-icon nc-ruler-pencil"></i>
                            </button>
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-danger" aria-label="remove button" aria-describedby="el-tooltip-8342" tabindex="0">
                              <i className="nc-icon nc-simple-remove"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label for="af5ff1ca27348" className="form-check-label">
                                <input id="af5ff1ca27348" type="checkbox" className="form-check-input" />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img src={userPic} classNameName="img-raised" />
                            </div>
                          </td>
                          <td className="text-left">But I must explain to you how all this mistaken idea of denouncing pleasure</td>
                          <td className="td-actions text-right">
                            <button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-info" aria-label="edit button" aria-describedby="el-tooltip-8215" tabindex="0">
                              <i className="nc-icon nc-ruler-pencil"></i>
                            </button><button type="button" className="btn btn-icon-mini btn-neutral el-tooltip btn-icon btn-round btn-danger" aria-label="remove button" aria-describedby="el-tooltip-1614" tabindex="0">
                              <i className="nc-icon nc-simple-remove"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-footer"><hr />
                  <div className="stats">
                    <i className="fa fa-history"></i>
                    Updated 3 minutes ago
                  </div>
                </div>
              </div>

              {/* <div className="card"> */}
                <div className="txt-message-outer">
                  <textarea type="text" placeholder="Write messages" className="text-input-box" onChange={this.onChangeEvent} value={this.state.chatStore} onKeyUp={this.textAreaAdjust} />
                  <div className="file-container">
                    {/* <img src="/static/images/file-icon.svg" className="hover-effect-img" /> */}

                    <DropzoneComponent config={componentConfig}
                      eventHandlers={eventHandlers}
                      djsConfig={djsConfig}
                    >
                      <div className="dz-message">
                        <img src={fileIcon} className="hover-effect-img" />
                      </div>
                    </DropzoneComponent>
                  </div>
                  <div className="btn-container send-btn">
                    {/* <img src="/static/images/at.svg" className="smiley" />
                    <img src="/static/images/smiley.svg" className="smiley" onClick={this.showEmojiEvent} /> */}

                    <a href="#form" className="btn add-company" onClick={this.chatSubmit}>
                      SEND
                    {/* <img src="/static/images/send-arrow.svg" className="hover-effect-img" /> */}

                    </a>
                  </div>
                </div>
              {/* </div> */}
            </Col>

            <Col md="6" classNameName="text-center time-picker-outer">
              <div className="date-picker-wrapper">
                <DateTimePicker
                  onChange={this.onChange}
                  value={this.state.date}
                />
              </div>

              <div className="card card-timeline card-plain">
                <div className="card-body">

                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="nc-icon nc-single-copy-04"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <span className="p-badge badge-danger badge-pill">Some title</span>
                        </div>
                        <div className="timeline-body">
                          <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family
                                We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
                          at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
                        </div>
                        <div className="timeline-footer">
                          <h6>
                            <i className="fa fa-block-o"></i>
                            11 hours ago via Twitter
                        </h6>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-sun-fog-29"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <span className="p-badge badge-success badge-pill">Another Title</span>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album
                            to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from
                              shoes to music to homes is that Kim has to like it....
                        </p>
                        </div>
                      </div>
                    </li>

                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-world-2"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <span className="p-badge badge-info badge-pill">Another Title</span>
                        </div>
                        <div className="timeline-body">
                          <div>
                            <p>
                              Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing
                              @Figueroa and 12th in downtown LA 11:10PM
                          </p>
                            <p>
                              What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is
                              my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
                            </p>
                            <hr />
                            <li aria-haspopup="true" className="dropdown btn-group">
                              <button type="button" className="btn dropdown-toggle btn-round btn-info">
                                <i className="nc-icon nc-settings"></i> &nbsp;
                          </button>
                              <ul x-placement="bottom-start" className="dropdown-menu">
                                <a href="#" className="dropdown-item">Action</a>
                                <a href="#" className="dropdown-item">Another action</a>
                                <a href="#" className="dropdown-item">Something else here</a>
                              </ul>
                            </li>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          {/* <Row>
            <Col md="12">
              <Card className="demo-icons">
                <CardHeader>
                  <CardTitle tag="h5">100 Awesome Nucleo Icons</CardTitle>
                  <p className="card-category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p>
                </CardHeader>
                <CardBody className="all-icons">
                  <div id="icons-wrapper">
                    <section>
                      <ul>
                        <li>
                          <i className="nc-icon nc-air-baloon" />
                          <p>nc-air-baloon</p>
                          <em>\ea01</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-album-2" />
                          <p>nc-album-2</p>
                          <em>\ea02</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-alert-circle-i" />
                          <p>nc-alert-circle-i</p>
                          <em>\ea04</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-align-center" />
                          <p>nc-align-center</p>
                          <em>\ea03</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-align-left-2" />
                          <p>nc-align-left-2</p>
                          <em>\ea05</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-ambulance" />
                          <p>nc-ambulance</p>
                          <em>\ea06</em>
                        </li>
                        <li>
                          <i className="nc-icon nc-app" />
                          <p>nc-app</p>
                          <em>\ea07</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-atom" />
                          <p>nc-atom</p>
                          <em>\ea08</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-badge" />
                          <p>nc-badge</p>
                          <em>\ea09</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bag-16" />
                          <p>nc-bag-16</p>
                          <em>\ea0a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bank" />
                          <p>nc-bank</p>
                          <em>\ea0b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-basket" />
                          <p>nc-basket</p>
                          <em>\ea0c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bell-55" />
                          <p>nc-bell-55</p>
                          <em>\ea0d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bold" />
                          <p>nc-bold</p>
                          <em>\ea0e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-book-bookmark" />
                          <p>nc-book-bookmark</p>
                          <em>\ea0f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bookmark-2" />
                          <p>nc-bookmark-2</p>
                          <em>\ea10</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-box-2" />
                          <p>nc-box-2</p>
                          <em>\ea11</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-box" />
                          <p>nc-box</p>
                          <em>\ea12</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-briefcase-24" />
                          <p>nc-briefcase-24</p>
                          <em>\ea13</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bulb-63" />
                          <p>nc-bulb-63</p>
                          <em>\ea14</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bullet-list-67" />
                          <p>nc-bullet-list-67</p>
                          <em>\ea15</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-bus-front-12" />
                          <p>nc-bus-front-12</p>
                          <em>\ea16</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-button-pause" />
                          <p>nc-button-pause</p>
                          <em>\ea17</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-button-play" />
                          <p>nc-button-play</p>
                          <em>\ea18</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-button-power" />
                          <p>nc-button-power</p>
                          <em>\ea19</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-calendar-60" />
                          <p>nc-calendar-60</p>
                          <em>\ea1a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-camera-compact" />
                          <p>nc-camera-compact</p>
                          <em>\ea1b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-caps-small" />
                          <p>nc-caps-small</p>
                          <em>\ea1c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-cart-simple" />
                          <p>nc-cart-simple</p>
                          <em>\ea1d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-chart-bar-32" />
                          <p>nc-chart-bar-32</p>
                          <em>\ea1e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-chart-pie-36" />
                          <p>nc-chart-pie-36</p>
                          <em>\ea1f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-chat-33" />
                          <p>nc-chat-33</p>
                          <em>\ea20</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-check-2" />
                          <p>nc-check-2</p>
                          <em>\ea21</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-circle-10" />
                          <p>nc-circle-10</p>
                          <em>\ea22</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-cloud-download-93" />
                          <p>nc-cloud-download-93</p>
                          <em>\ea23</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-cloud-upload-94" />
                          <p>nc-cloud-upload-94</p>
                          <em>\ea24</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-compass-05" />
                          <p>nc-compass-05</p>
                          <em>\ea25</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-controller-modern" />
                          <p>nc-controller-modern</p>
                          <em>\ea26</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-credit-card" />
                          <p>nc-credit-card</p>
                          <em>\ea27</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-delivery-fast" />
                          <p>nc-delivery-fast</p>
                          <em>\ea28</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-diamond" />
                          <p>nc-diamond</p>
                          <em>\ea29</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-email-85" />
                          <p>nc-email-85</p>
                          <em>\ea2a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-favourite-28" />
                          <p>nc-favourite-28</p>
                          <em>\ea2b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-glasses-2" />
                          <p>nc-glasses-2</p>
                          <em>\ea2c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-globe-2" />
                          <p>nc-globe-2</p>
                          <em>\ea2d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-globe" />
                          <p>nc-globe</p>
                          <em>\ea2e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-hat-3" />
                          <p>nc-hat-3</p>
                          <em>\ea2f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-headphones" />
                          <p>nc-headphones</p>
                          <em>\ea30</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-html5" />
                          <p>nc-html5</p>
                          <em>\ea31</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-image" />
                          <p>nc-image</p>
                          <em>\ea32</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-istanbul" />
                          <p>nc-istanbul</p>
                          <em>\ea33</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-key-25" />
                          <p>nc-key-25</p>
                          <em>\ea34</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-laptop" />
                          <p>nc-laptop</p>
                          <em>\ea35</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-layout-11" />
                          <p>nc-layout-11</p>
                          <em>\ea36</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-lock-circle-open" />
                          <p>nc-lock-circle-open</p>
                          <em>\ea37</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-map-big" />
                          <p>nc-map-big</p>
                          <em>\ea38</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-minimal-down" />
                          <p>nc-minimal-down</p>
                          <em>\ea39</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-minimal-left" />
                          <p>nc-minimal-left</p>
                          <em>\ea3a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-minimal-right" />
                          <p>nc-minimal-right</p>
                          <em>\ea3b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-minimal-up" />
                          <p>nc-minimal-up</p>
                          <em>\ea3c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-mobile" />
                          <p>nc-mobile</p>
                          <em>\ea3d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-money-coins" />
                          <p>nc-money-coins</p>
                          <em>\ea3e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-note-03" />
                          <p>nc-note-03</p>
                          <em>\ea3f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-palette" />
                          <p>nc-palette</p>
                          <em>\ea40</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-paper" />
                          <p>nc-paper</p>
                          <em>\ea41</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-pin-3" />
                          <p>nc-pin-3</p>
                          <em>\ea42</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-planet" />
                          <p>nc-planet</p>
                          <em>\ea43</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-refresh-69" />
                          <p>nc-refresh-69</p>
                          <em>\ea44</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-ruler-pencil" />
                          <p>nc-ruler-pencil</p>
                          <em>\ea45</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-satisfied" />
                          <p>nc-satisfied</p>
                          <em>\ea46</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-scissors" />
                          <p>nc-scissors</p>
                          <em>\ea47</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-send" />
                          <p>nc-send</p>
                          <em>\ea48</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-settings-gear-65" />
                          <p>nc-settings-gear-65</p>
                          <em>\ea49</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-settings" />
                          <p>nc-settings</p>
                          <em>\ea4a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-share-66" />
                          <p>nc-share-66</p>
                          <em>\ea4b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-shop" />
                          <p>nc-shop</p>
                          <em>\ea4c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-simple-add" />
                          <p>nc-simple-add</p>
                          <em>\ea4d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-simple-delete" />
                          <p>nc-simple-delete</p>
                          <em>\ea4e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-simple-remove" />
                          <p>nc-simple-remove</p>
                          <em>\ea4f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-single-02" />
                          <p>nc-single-02</p>
                          <em>\ea50</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-single-copy-04" />
                          <p>nc-single-copy-04</p>
                          <em>\ea51</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-sound-wave" />
                          <p>nc-sound-wave</p>
                          <em>\ea52</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-spaceship" />
                          <p>nc-spaceship</p>
                          <em>\ea53</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-sun-fog-29" />
                          <p>nc-sun-fog-29</p>
                          <em>\ea54</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-support-17" />
                          <p>nc-support-17</p>
                          <em>\ea55</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tablet-2" />
                          <p>nc-tablet-2</p>
                          <em>\ea56</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tag-content" />
                          <p>nc-tag-content</p>
                          <em>\ea57</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tap-01" />
                          <p>nc-tap-01</p>
                          <em>\ea58</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tie-bow" />
                          <p>nc-tie-bow</p>
                          <em>\ea59</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tile-56" />
                          <p>nc-tile-56</p>
                          <em>\ea5a</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-time-alarm" />
                          <p>nc-time-alarm</p>
                          <em>\ea5b</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-touch-id" />
                          <p>nc-touch-id</p>
                          <em>\ea5c</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-trophy" />
                          <p>nc-trophy</p>
                          <em>\ea5d</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-tv-2" />
                          <p>nc-tv-2</p>
                          <em>\ea5e</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-umbrella-13" />
                          <p>nc-umbrella-13</p>
                          <em>\ea5f</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-user-run" />
                          <p>nc-user-run</p>
                          <em>\ea60</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-vector" />
                          <p>nc-vector</p>
                          <em>\ea61</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-watch-time" />
                          <p>nc-watch-time</p>
                          <em>\ea62</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-world-2" />
                          <p>nc-world-2</p>
                          <em>\ea63</em>
                        </li>
                        <li>
                          <i classNameName="nc-icon nc-zoom-split" />
                          <p>nc-zoom-split</p>
                          <em>\ea64</em>
                        </li>
                      </ul>
                    </section>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default Icons;
