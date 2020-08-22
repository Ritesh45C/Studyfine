import React from "react";
import Diary from "views/StudentView/Diary/Diary";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Paper } from "@material-ui/core";
import { Card } from "reactstrap";

const DiaryData = () => {
  const [value, setValue] = React.useState("Student");
  const [age, setAge] = React.useState(10);

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="content">
      <Card
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose</FormLabel>
          <br />
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="Teacher"
              control={<Radio />}
              label="Teacher"
            />
          </RadioGroup>
        </FormControl>
        {value === "Student" ? (
          <FormControl>
            <InputLabel id="demo-simple-select-label">Student List</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleAge}
            >
              <MenuItem value={10}>Student 1</MenuItem>
              <MenuItem value={20}>Student 2</MenuItem>
              <MenuItem value={30}>Student 3</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl>
            <InputLabel id="demo-simple-select-label">Teacher List</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleAge}
            >
              <MenuItem value={10}>Teacher 1</MenuItem>
              <MenuItem value={20}>Teacher 2</MenuItem>
              <MenuItem value={30}>Teacher 3</MenuItem>
            </Select>
          </FormControl>
        )}
      </Card>

      <Diary />
    </div>
  );
};

export default DiaryData;
