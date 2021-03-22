import React from "react"; 
import {Link} from "react-router-dom"; 
import {Container, Row, Col} from "reactstrap"; 

import mediaIcon from "./mediaicon.png";

const projectNames1 = ["mp4", "fishing", "batman"];
const projectNames2 = ["file", "effect", "smoke"];
const projectNames3 = ["new_file", "nature", "cat"];



function Thumbnail(props){
    return (<div className="media-preview">
                <img className="media-logo" src={mediaIcon}/>
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