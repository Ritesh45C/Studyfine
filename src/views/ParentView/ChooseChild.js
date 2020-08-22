import React, { useState, useEffect } from "react";
import {
  Dialog,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  IconButton,
  RadioGroup,
} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function ChooseChild(props) {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleSubmit(e, id) {
    // e.preventDefault();
    // if (!value) {
    //   alert("Please choose the Daycare");
    // } else {
    //   localStorage.setItem("daycareId", value);
    props.history.push(`/parents/dashboard/`);
    //   window.location.reload();
    // }
  }

  // console.log(id, e);

  let dialog = null;

  dialog = (
    <div className="dialogBox">
      <FormControl component="fieldset">
        <div style={{ paddingBottom: "20px" }}>
          <FormLabel component="legend">Choose Your Child</FormLabel>
        </div>

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="John Doe"
            control={<Radio />}
            label="John Doe"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <div className="daycare">
        <IconButton color="primary" onClick={(e) => handleSubmit(e)}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );

  return (
    <Dialog className="model" fullWidth={true} open={open}>
      {dialog}
    </Dialog>
  );
}

export default ChooseChild;
