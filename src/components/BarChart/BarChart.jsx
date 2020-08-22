import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
    Row,
    Col
} from "reactstrap";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['English', 'Math', 'Hindi', 'Punjabi', 'Science', 'Economics', 'S.S.T', 'Punjabi']
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <Row>
            <Col md="12" className="BarChart-wrapper">
                <div className="mixed-chart">
                    <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="100%"
                    height="500"
                    />
                </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BarChart;
