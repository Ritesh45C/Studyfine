import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class ManageExecutive extends Component {
  state = {
    class: "class1",
    student: "Ten",
    rowData: [
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        schoolName: "School Name 1",
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        schoolName: "School Name 2",
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        schoolName: "School Name 3",
      },
    ],
    columnDefs: [
      { field: "firstName" },
      { field: "lastName" },
      { field: "gender" },
      { field: "schoolName" },
      {
        field: "Remove Executive",
        editable: false,
        cellRendererFramework: function(params) {
          return <button class="btn btn-prev btn-primary"> Remove </button>;
        },
      },
    ],

    defaultColDef: {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true,
    },
  };
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={{ size: 4, offset: 2 }}>
            <div className="syllabus-dropdown">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Select School
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  value={this.state.class}
                  onChange={this.handleChangeClass}
                >
                  <MenuItem value="class1">School 1</MenuItem>
                  <MenuItem value="class2">School 2</MenuItem>
                  <MenuItem value="class3">School 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>

          <Col md="4">
            <div className="syllabus-dropdown">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Executive Name
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  value={this.state.student}
                  onChange={this.handleChangeStudent}
                >
                  <MenuItem value="Ten">Executive 1</MenuItem>
                  <MenuItem value="Twenty">Executive 2</MenuItem>
                  <MenuItem value="Thirty">Executive 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <div
          id="myGrid"
          className="ag-theme-material"
          style={{
            height: "1000px",
            width: "76vw",
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            defaultColDef={this.state.defaultColDef}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
