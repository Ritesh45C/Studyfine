import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { Row, Col } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../Executive.css";
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      rowData: [
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Bob",
          lastName: "Harrison",
          gender: "Male",
          address:
            "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Mary",
          lastName: "Wilson",
          gender: "Female",
          age: 11,
          address:
            "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
          grade: "B+",
          country: "India",
        },
        {
          firstName: "Sadiq",
          lastName: "Khan",
          gender: "Male",
          age: 12,
          address:
            "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
          grade: "A+",
          country: "India",
        },
        {
          firstName: "Jerry",
          lastName: "Mane",
          gender: "Male",
          age: 12,
          address:
            "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
          grade: "A+",
          country: "India",
        },
      ],
      columnDefs: [
        { field: "firstName" },
        { field: "lastName" },
        { field: "gender" },
        { field: "age" },
        { field: "grade" },
        { field: "country" },
        {
          field: "address",
          minWidth: 350,
        },
      ],

      defaultColDef: {
        flex: 1,
        minWidth: 110,
        editable: true,
        resizable: true,
      },
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.expandAll();
  };
  onChange = (e) => {
    this.setState(
      {
        searchValue: e.target.value,
      },
      () => {
        this.gridApi.setQuickFilter(this.state.searchValue);
        console.log("123 ", this.state.columnDefs);
      }
    );
  };
  onBtPrint = () => {
    var gridApi = this.gridApi;
    setPrinterFriendly(gridApi);
    setTimeout(function() {
      window.print();
      setNormal(gridApi);
    }, 2000);
  };
  onBtnExportDataAsCsv = () => {
    this.gridApi.exportDataAsCsv();
  };

  onBtnExportDataAsExcel = () => {
    this.gridApi.exportDataAsExcel();
  };
  render() {
    console.log(this.props, "this ag-grid");
    return (
      <div className="content">
        <Row>
          <Col md={{ size: 4, offset: 2 }}>
            <div className="syllabus-dropdown">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Select Class
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  value={this.state.class}
                  onChange={this.handleChangeClass}
                >
                  <MenuItem value="class1">Class1</MenuItem>
                  <MenuItem value="class2">Class2</MenuItem>
                  <MenuItem value="class3">Class3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>

          <Col md="4">
            <div className="syllabus-dropdown">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Select Section
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  value={this.state.student}
                  onChange={this.handleChangeStudent}
                >
                  <MenuItem value="Ten">Section 1</MenuItem>
                  <MenuItem value="Twenty">Section 2</MenuItem>
                  <MenuItem value="Thirty">Section 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Col>
        </Row>
        <div className="dataButtons">
          <input
            type="text"
            className="search_data"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.onChange}
          />
          <button onClick={() => this.onBtPrint()}>Print</button>
          <button onClick={() => this.onBtnExportDataAsCsv()}>
            Download Csv
          </button>
          {/* <button onClick={() => this.onBtnExportDataAsExcel()}>
            Download Xlsx
          </button> */}
        </div>

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
            onGridReady={this.onGridReady}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
function setPrinterFriendly(api) {
  var eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.height = "";
  api.setDomLayout("print");
}

function setNormal(api) {
  var eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "1000px";
  eGridDiv.style.height = "1280px";
  api.setDomLayout(null);
}
function controlsCellRenderer() {
  return "<button>A</button><button>B</button><button>C</button>";
}

export default Data;
