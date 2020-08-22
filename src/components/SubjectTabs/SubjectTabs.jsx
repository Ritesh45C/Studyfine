import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import "./../Tabs/Tabs.css";
import PDFViewer from "pdf-viewer-reactjs";
import ItemsCarousel from "react-items-carousel";
import { Rnd } from "react-rnd";

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
  top: "-50"
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SubjectTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [openPdf, setOpenPdf] = React.useState(false);
  const [openLib, setOpenLib] = React.useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  // PDF
  const handleOpenPdf = () => {
    setOpenPdf(true);
  };
  const handleClosePdf = () => {
    setOpenPdf(false);
  };

  //Library
  const handleOpenLib = () => {
    setOpenLib(true);
  };

  const handleCloseLib = () => {
    setOpenLib(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="custom-tab">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Subject Book"
            {...a11yProps(0)}
            className="custom-tab-color"
          />
          <Tab label="Library" {...a11yProps(1)} className="custom-tab-color" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
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
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>

              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenPdf}
                />
              </div>
            </ItemsCarousel>
          </div>
        </TabPanel>
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
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenLib}
                />
              </div>

              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenLib}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenLib}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenLib}
                />
              </div>
              <div
                style={{ height: 150, position: "relative", cursor: "pointer" }}
              >
                <img
                  src={require("./../../assets/img/pdf1.png")}
                  className="layer-pdf"
                  onClick={handleOpenLib}
                />
              </div>
            </ItemsCarousel>
          </div>
        </TabPanel>
      </SwipeableViews>
      {/* Pdf Modal */}
      {openPdf ? (
        <Rnd
          cancel=".close-pdf"
          style={stylePdf}
          default={{
            x: 0,
            y: 0,
            width: 650
          }}
        >
          <div className="pdf-wrapper-modal">
            <PDFViewer
              document={{
                url: require("./../../assets/pdf/bhhn1ps.pdf")
              }}
              className="pdf-css"
            />
          </div>
          <div onClick={handleClosePdf} className="close-pdf">
            Close
          </div>
        </Rnd>
      ) : (
        ""
      )}

      {/* Library Modal */}
      {openLib ? (
        <Rnd
          cancel=".close-pdf"
          style={stylePdf}
          default={{
            x: 0,
            y: 0,
            width: 650
          }}
        >
          <div className="pdf-wrapper-modal">
            <PDFViewer
              document={{
                url: require("./../../assets/pdf/bhhn1ps.pdf")
              }}
              className="pdf-css"
            />
          </div>
          <div onClick={handleCloseLib} className="close-pdf">
            Close
          </div>
        </Rnd>
      ) : (
        ""
      )}
    </div>
  );
}
