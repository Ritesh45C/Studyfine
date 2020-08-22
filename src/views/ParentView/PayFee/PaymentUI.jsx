import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentForm from "./PaymentForm";

import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import NetBanking from "./NetBanking";
import Upi from "./Upi";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)",
    display: "flex",
    width: 900,
    height: 650,
    padding: 15,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    outline: "none !important",
    padding: 22,
    margin: 15,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          icon={<CreditCardIcon />}
          className={classes.tab}
          label="Credit Card"
          {...a11yProps(0)}
        />
        <Tab
          icon={<CreditCardIcon />}
          className={classes.tab}
          label="Debit Card"
          {...a11yProps(1)}
        />
        <Tab
          icon={<AccountBalanceIcon />}
          className={classes.tab}
          label="Net Banking"
          {...a11yProps(2)}
        />
        <Tab
          icon={<PhoneIphoneIcon />}
          className={classes.tab}
          label="Paytm & Wallet"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PaymentForm name="Credit Card" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaymentForm name="Debit Card" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NetBanking />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Upi />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
