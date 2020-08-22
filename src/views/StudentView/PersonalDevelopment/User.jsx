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
import React, { Fragment } from "react";
import _ from "lodash";
import "./User.css";
import TabsWrappedLabel from "components/Tabs/Tabs.jsx";
import SubjectTabs from "components/SubjectTabs/SubjectTabs";
import YTSearch from "youtube-api-search";
import SearchBar from "./Videos/searchBar";
import VideoDetail from "./Videos/videoDetails";
import VideoList from "./Videos/videoList";
import { Card, Row, Col } from "reactstrap";
const API_KEY = "AIzaSyBgWEQ_Fbc4NW36c_Re03wf9FSw_MH5P44";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("Advance Algorithm");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <Fragment>
        <div className="content">
          <div style={{ display: "flex" }}>
            <div>
              <SearchBar onSearchTermChange={videoSearch} />
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <VideoList
              onVideoSelect={(selectedVideo) =>
                this.setState({ selectedVideo })
              }
              videos={this.state.videos}
            />
          </div>
        </div>
        <div className="content" style={{ margin: 0 }}>
          <Row>
            <Col md="12">
              <SubjectTabs />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default User;
