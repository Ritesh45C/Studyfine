import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import "./Tabs.css";

// Modal

import Iframe from "react-iframe";
import PDFViewer from "pdf-viewer-reactjs";
import ItemsCarousel from "react-items-carousel";
import ReactPlayer from "react-player";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#ffffff",
  padding: "20px",
  margin: "50px",
};

const stylePdf = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#ffffff",
  // padding:"20px",
  boxShadow: "0px 0px 2px #C1C1C1",
  maxHeight: "300",
  overflowY: "auto",
  overflowX: "hidden",
  top: "-50",
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      ro
      le="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openPdf, setOpenPdf] = React.useState(false);
  // const [numPages, setState] = React.useState(null);
  // const [pageNumber, setStates] = React.useState(1);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [x, y] = useState(10, 20);
  const chevronWidth = 40;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //   Modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // PDF
  const handleOpenPdf = () => {
    setOpenPdf(true);
  };
  const handleClosePdf = () => {
    setOpenPdf(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="custom-tab">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Video" {...a11yProps(0)} className="custom-tab-color" />
          <Tab label="Notes" {...a11yProps(1)} className="custom-tab-color" />
          {/* <Tab label="Open Video Modal" {...a11yProps(2)} className="custom-tab-color" /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* Video Slider */}
        <TabPanel value={value} index={0}>
          <div
            style={{ padding: `0 ${chevronWidth}px` }}
            className="video-slider"
          >
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
                  light={true}
                  allowfullscreen=""
                  pip={true}
                  playing={false}
                  playIcon={false}
                  className="video-modal-wrapper"
                />
                <div className="layer" onClick={handleOpen}></div>
              </div>
            </ItemsCarousel>
          </div>
        </TabPanel>
        {/* PDF Slider */}
        <TabPanel value={value} index={1}>
          <div
            style={{ padding: `0 ${chevronWidth}px` }}
            className="pdf-slider"
          >
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div
                style={{ position: "relative", cursor: "pointer" }}
                className="pdf-wrapper"
              >
                {/* <PDFViewer
                        document={{
                            url:require('./../../assets/pdf/bhhn1ps.pdf'),
                        }}
                        className="pdf"
                    /> */}
                {/* <div className="layer" onClick={handleOpen}></div> */}
                <img
                  alt=""
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>

              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  alt=""
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  alt=""
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  alt=""
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  alt=""
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
            </ItemsCarousel>
          </div>
        </TabPanel>
      </SwipeableViews>
      {open ? (
        <Rnd
          cancel=".close-pdf"
          style={style}
          default={{
            x: 20,
            y: 0,
            width: 500,
            height: 400,
          }}
        >
          <Iframe
            url="https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <div onClick={handleClose} className="close-pdf">
            Close
          </div>
        </Rnd>
      ) : (
        ""
      )}
      {/* Pdf Modal */}
      {openPdf ? (
        <Rnd
          cancel=".close-pdf"
          style={stylePdf}
          default={{
            x: 0,
            y: 0,
            width: 650,
          }}
        >
          <div className="pdfwrapper">
            <div onClick={handleClosePdf} className="close-pdf">
              Close
            </div>
            <div className="pdf-wrapper-modal">
              <PDFViewer
                document={{
                  url: require("./../../assets/pdf/bhhn1ps.pdf"),
                }}
                className="pdf-css"
              />
            </div>
          </div>
        </Rnd>
      ) : (
        ""
      )}
    </div>
  );
}
