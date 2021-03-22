import React from "react"; 
import {Link} from "react-router-dom"; 
import {Container, Row, Col} from "reactstrap"; 

import videoIcon from "./video-icon.png";

const projectNames1 = ["Zulu", "2019_roadtrip", "untitled", "Sarah Grad", "momdad40yr"];
const projectNames2 = ["fincegoal", "lcshighlights", "connor-hockey","untitled(2)", "grandmabday"];
const projectNames3 = ["greece2004", "untitled(3)", "test", "dronefootage", "owls"];

const fileExtension = ".sse"

function Thumbnail(props){
    return (
        <Link to={{
            pathname:"/editor", 
            editorProps:{name:props.name + fileExtension},
        }}>
            <div className="Thumbnail-Box">
                <img className="App-logo" src={videoIcon} width="100"/>
            </div>
            <h6 className="Content-Subtitle">
               {props.name + fileExtension}
            </h6>
        </Link>
        
    )
}

function DemoProject(){

    return (
        <div className="Menu-Content-Box">
            <h5 className="Content-Subtitle">
               Previous Projects
            </h5>
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