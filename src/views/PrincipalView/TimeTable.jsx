import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";
class TimeTable extends React.Component{
    render(){
        return(
            <div className="content">
                  <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">TIME TABLE for Session: 2019-20</CardTitle>
                  <CardTitle tag="h4">LEVEL: PRIMARY/SECONDARY </CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Table bordered responsive striped>
                    <thead>
                      <tr>
                        <th>PERIODS</th>
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                        <th>4th</th>
                        <th>5th</th>
                        <th>6th</th>
                        <th>7th</th>
                        <th>8th</th>
                        <th>9th</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="time-heading-css">
                        <th scope="row">Time</th>
                        <td>07:45 am</td>
                        <td>08:10 am</td>
                        <td>08:45 am</td>
                        <td>09:00 am</td>
                        <td>12:00 pm</td>
                        <td>12:30 am</td>
                        <td>01:00 am</td>
                        <td>01:30 am</td>
                        <td>02:00 pm</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">Mon</th>
                        <td>Eng</td>
                        <td>Hindi</td>
                        <td>Sci</td>
                        <td>Math</td>
                        <td rowSpan="6" className="lunch-col-bg">Recess</td>
                        <td>S.S.t</td>
                        <td>Hindi</td>
                        <td>Sci</td>
                        <td>Math</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Tues</th>
                        <td>Hindi</td>
                        <td>Eng</td>
                        <td>Sci</td>
                        <td>S.S.t</td>
                      
                        <td>Math</td>
                        <td>Sci</td>
                        <td>S.S.t</td>
                        <td>Math</td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Wed</th>
                        <td>Math</td>
                        <td>Sci</td>
                        <td>Hindi</td>
                        <td>Eng</td>
                        <td>S.S.t</td>
                        <td>Math</td>
                        <td>Sci</td>
                        <td>Hindi</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Thur</th>
                        <td>Eng</td>
                        <td>Hindi</td>
                        <td>Sci</td>
                        <td>Math</td>
                        <td>S.S.t</td>
                        <td>Hindi</td>
                        <td>Sci</td>
                        <td>Math</td>
                      
                      </tr>
                      <tr>
                        <th scope="row">Fri</th>
                        <td>Hindi</td>
                        <td>Eng</td>
                        <td>Sci</td>
                        <td>S.S.t</td>
                        <td>Math</td>
                        <td>Sci</td>
                        <td>S.S.t</td>
                        <td>Math</td>
                      
                      </tr>
                      <tr>
                        <th scope="row">Sat</th>
                        <td>Math</td>
                        <td>Sci</td>
                        <td>Hindi</td>
                        <td>Eng</td>
                        <td>S.S.t</td>
                        <td>Sci</td>
                        <td>Hindi</td>
                        <td>Eng</td>
                       
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
            </div>
        )
    }
}
export default TimeTable;