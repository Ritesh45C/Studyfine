import React from "react";
import { Table, Card, CardHeader, CardBody } from 'reactstrap';

class Testtable extends React.Component{
    render(){
        return(
            <Card className="card-stats custom-card-height">
                <CardBody className="custom-card-body">
                    
                    <Table bordered>
                        <tbody>
                        <tr>
                            <th scope="row">Subject</th>
                            <td>Science</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Topic</th>
                            <td>Human Body</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Subtopic</th>
                            <td>70% of water</td>
                        
                        </tr>
                        <tr>
                            <td>
                                No. of Questions
                            </td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>20 mins</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}

export default Testtable;
