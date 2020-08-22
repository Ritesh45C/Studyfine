import React from "react";
import { Table, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';
import DropzoneComponent from 'react-dropzone-component';
var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: false,
    postUrl: '/uploadHandler',
    thumbnail: true,
  };
  var djsConfig = {
    autoProcessQueue: false,
    params: { myParameter: "I'm a parameter!" }
  }
  
  var eventHandlers = {
    addedfile: (file) => { console.log('file', file.name) },
    thumbnail: false
  }
class Simpleques extends React.Component{
    state={
        open:false,
        hide:false
    }
    handleClickOpen=()=>{
        this.setState({
              open:true
          })

    }
    handleClose = () => {
        this.setState({
            open:false
        })
      };
    render(){
        return(
            <div>
                      
                <Card className="card-stats custom-card-height">
                    <CardBody className="custom-card-body">
                            <Row className="form-top-space">
                                    <Col md="1"></Col>
                                    <Col md="10">
                                    
                                        <Form className="create-paper-form">
                                            <FormGroup>
                                            {/* <Label for="exampleEmail">Email</Label> */}
                                            <Input type="email" name="email" id="exampleEmail"  />
                                            </FormGroup>
                                            <FormGroup>
                                            {/* <Label for="examplePassword">Password</Label> */}
                                            <Input type="password" name="password" id="examplePassword" />
                                            </FormGroup>
                                            <Row>
                                                <Col md="9">
                                                    <FormGroup>
                                                        {/* <Label for="examplePassword">Password</Label> */}
                                                        <Input type="password" name="password" id="examplePassword"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        {/* <Label for="examplePassword">Password</Label> */}
                                                        <Input type="password" name="password" id="examplePassword"/>
                                                    </FormGroup>
                                                    <div className="submit-btn"> <Button type="submit" className="btn btn-primary">Submit</Button></div>
                                                </Col>
                                                <Col md="3">
                                                <DropzoneComponent config={componentConfig}
                                                    eventHandlers={eventHandlers}
                                                    djsConfig={djsConfig}
                                                >
                                                    <div className="dz-message file-btn-css">
                                                        Choose File
                                                    </div>
                                                </DropzoneComponent>
                                                </Col>
                                            </Row>
                                        </Form> 
                                    
                                    </Col>
                                    <Col md="1"></Col>
                                </Row>
                            
                    </CardBody>
                    
                </Card>
            </div>
        )
    }
}

export default Simpleques;