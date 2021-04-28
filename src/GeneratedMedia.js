import React from "react"; 
import {Container, Row} from "reactstrap"; 

import mediaIcon from "./mediaicon.png";

const projectNames1 = ["mp4", "fish", "bats"];
const projectNames2 = ["file", "build", "smoke"];
const projectNames3 = ["new", "yeet", "cat"];



function Thumbnail(props){
    return (<div className="media-preview">
                <img alt="media logo" className="media-logo" src={mediaIcon}/>
                <p className="media-subtitle">
                    {props.name}
                </p>
            </div>  
    )
}

function DemoProject(){

    return (
        <div className="media-content-box">
            <Container>
                <Row>
                    {projectNames1.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
                <Row>
                    {projectNames2.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
                <Row>
                    {projectNames3.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
            </Container>
            
        </div>
        
    )
}


/**
 * these are the thumbnails which show "Previous Projects"
 */
export default DemoProject; 