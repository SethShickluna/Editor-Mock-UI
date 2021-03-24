//npm co
import React from "react"; 
import {Container, Row, Col} from "reactstrap"; 

import DemoProject from "./DemoProject";
import InputForm from "./InputForm"; 

function MenuPage(props){


    return (
        
        <Container>
            <Row>
                <Col classname="col-md-12" align="center">
                    <h1 className="Menu-Title">
                        Sapien Studio Editor
                    </h1>
                </Col>
            </Row>
            
            <Row>
                <Col classname="col-md-8" align="center">
                    <DemoProject/>
                </Col>
            </Row>
            <Row>
                <Col classname="col-md-12" align="center">
                    <div className="new-project-container">
                        <InputForm buttonLabel="Create New Project"/>
                        </div>
                </Col>
            </Row>
           
        </Container>
        
    )
}


export default MenuPage; 