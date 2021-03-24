import React from 'react';
import {Link} from 'react-router-dom'; 
import { Progress, Container, Row, Col, Button } from 'reactstrap';



const Export = (props) => {

  return (
    <div>
        <Container>
            <Row>
                <Col classname="col-md-12" align="center">
                    <h1 className="Menu-Title">
                       Exporting Project
                    </h1>
                </Col>
            </Row>
            
            <Row>
                <Col classname="col-md-8" align="center">
                <Progress animated color="danger" value={100} />
                <div style={{marginTop:"10%"}}/>
                <Link to="/"><Button color="primary">Return Home</Button></Link>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Export; 