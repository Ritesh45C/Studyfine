import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 500,
    },
  }));
 
class Dropdowncls extends React.Component{
    state={
        class:'',
        subject:'',
        topic:'',
        subTopic:'',
        quesList:false
    }

    handleChangeClass=cls=>{
        this.setState({
            class:cls.target.value
        })
    }
    handleChangeSubject=subject=>{
        this.setState({
            subject:subject.target.value
        })
    }
    handleChangeTopic=topic=>{
        this.setState({
            topic:topic.target.value
        })
    }
    handleChangeSubTopic=subTopic=>{
        this.setState({
            subTopic:subTopic.target.value
        })
    }
    
    handleChangeNumber=num=>{
        this.setState({
            num:num.target.value
        })
        
        if((this.state.class == '' || undefined) && (this.state.subject == '' || undefined) && (this.state.topic == '' || undefined) && (this.state.subTopic == '' || undefined)){
            this.setState({
                quesList:false
            })
        }
        else{
            this.setState({
                quesList:true
            })
        }
    }
    render(){
        console.log("this.state.class", this.state.class)
        console.log("this.state.subject", this.state.subject)

    
        return(
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody className="custom-card-body card-bottom-padding">
                                <Row>
                                    <Col md="1"></Col>
                                    <Col md="2">
                                        <div className="syllabus-dropdown">
                                                <FormControl>
                                                        <InputLabel id="demo-customized-select-label">Select Class</InputLabel>
                                                        <Select
                                                        labelId="demo-customized-select-label"
                                                        value={this.state.age}
                                                        onChange={this.handleChangeClass}
                                                        >
                                                            <MenuItem value="Ten">Class1</MenuItem>
                                                            <MenuItem value="Twenty">Class2</MenuItem>
                                                            <MenuItem value="Thirty">Class3</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </div> 
                                    
                                    </Col>
                                    <Col md="2">
                                        <div className="syllabus-dropdown">
                                            <FormControl>
                                                    <InputLabel id="demo-customized-select-label">Select Subject</InputLabel>
                                                    <Select
                                                    labelId="demo-customized-select-label"
                                                    value={this.state.age}
                                                    onChange={this.handleChangeSubject}
                                                    >
                                                        <MenuItem value="Ten">English</MenuItem>
                                                        <MenuItem value="Twenty">Hindi</MenuItem>
                                                        <MenuItem value="Thirty">Science</MenuItem>
                                                    </Select>
                                            </FormControl>
                                        </div> 
                                    </Col>
                                    <Col md="2">
                                            <div className="syllabus-dropdown">
                                                <FormControl>
                                                    <InputLabel id="demo-customized-select-label">Select Topic</InputLabel>
                                                    <Select
                                                    labelId="demo-customized-select-label"
                                                    value={this.state.age}
                                                    onChange={this.handleChangeTopic}
                                                    >
                                                        <MenuItem value="Ten">English</MenuItem>
                                                        <MenuItem value="Twenty">Hindi</MenuItem>
                                                        <MenuItem value="Thirty">Science</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                    </Col>
                                    <Col md="2">
                                             <div className="syllabus-dropdown">
                                                <FormControl>
                                                    <InputLabel id="demo-customized-select-label">Select SubTopic</InputLabel>
                                                    <Select
                                                    labelId="demo-customized-select-label"
                                                    value={this.state.age}
                                                    onChange={this.handleChangeSubTopic}
                                                    >
                                                        <MenuItem value="Ten">English</MenuItem>
                                                        <MenuItem value="Twenty">Hindi</MenuItem>
                                                        <MenuItem value="Thirty">Science</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                    </Col>
                                    <Col md="2">
                                             <div className="syllabus-dropdown">
                                                <FormControl>
                                                    <InputLabel id="demo-customized-select-label">No of Question</InputLabel>
                                                    <Select
                                                    labelId="demo-customized-select-label"
                                                    value={this.state.age}
                                                    onChange={this.handleChangeNumber}
                                                    >
                                                        <MenuItem value="Ten">5</MenuItem>
                                                        <MenuItem value="Ten">10</MenuItem>
                                                        <MenuItem value="Twenty">15</MenuItem>
                                                        <MenuItem value="Thirty">20</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        
                    </Col>  

                </Row>
                <Row>
                    <Col md="12">
                        <h2>Question & Answer List:</h2>
                        {this.state.quesList ? 
                                <Card>
                                    <CardBody>
                                  
                                        <ul>
                                            <li>
                                                What is Data?
                                            </li>
                                            <hr/>
                                            <li>
                                                What is Computer?
                                            </li>
                                            <hr/>
                                            <li>
                                                What is Reactjs?
                                            </li>
                                            <hr/>
                                            <li>
                                                What is java?
                                            </li>
                                            <hr/>
                                            <li>
                                                What is meaning of gravity?
                                            </li>
                                            <hr/>
        
                                        </ul>
                                      
                                   </CardBody>
                                  
                                </Card>
                            : null}

                    </Col>

                </Row>

            </div>
        )
    }
}
export default Dropdowncls;