import React from "react";
import { Table, Card, CardHeader, CardBody, Form, FormGroup, Label, Input} from 'reactstrap';
class Multichoice extends React.Component{
    render(){
        return(
            <Card className="card-stats custom-card-height">
                <CardBody className="custom-card-body">
                        <Form>
                            <FormGroup>
                                    <legend> What is Reactjs?</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Framework
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Library
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Scripting Language
                                    </Label>
                                </FormGroup>

                            </FormGroup> 
                        </Form>
                </CardBody>
            </Card>
        )
    }
}

export default Multichoice;