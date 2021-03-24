import React from "react"; 
import {Container, Row, Col} from "reactstrap"; 

import {MdFolder, MdFolderOpen} from "react-icons/md"; 

import mediaIcon from "./mediaicon.png";
import GeneratedMedia from "./GeneratedMedia"; 

const transitionNames = ["swipe", "slide", "circle"];
const transitionNames2 = ["oval", "glass", "fall"];
const CCnames = ["dB", "muffle", "silence"];


const folderStyle= { 
    color: "white",
    margin: "7px", 
}

function Thumbnail(props){
    return (<div className="effects-preview">
                <img alt="media logo" className="media-logo" src={mediaIcon}/>
                <p className="media-subtitle">
                    {props.name}
                </p>
            </div>  
    )
}

function Folder(open) {
    return(
        <div>
            {open ?  
                <div>
                    <MdFolderOpen size={60} style={folderStyle}/> 
                </div>
                : 
                <div>
                    <MdFolder size={60} style={folderStyle}/>
                </div>}
        </div>)
}

function RecentlyUsed(){

    return (
        <div className="media-content-box">
            <Container>
                <Row align="left">
                    {Folder(true)}
                    <Col align="left">
                        <p className="media-subtitle transition-name">Transitions</p>
                    </Col>
                </Row>
                <Row>
                    {transitionNames.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
                <Row>
                    {transitionNames2.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
                <Row align="left">
                    {Folder(true)}
                    <Col align="left">
                     <p className="media-subtitle transition-name">Soften</p>
                    </Col>
                </Row>
                <Row>
                    {CCnames.map((name) =>{
                        return(
                        <Thumbnail name={name}/>)
                    })}
                </Row>
            </Container>
            <Row align="left">
                    {Folder(true)}
                    <Col align="left">
                     <p className="media-subtitle transition-name">Project Media</p>
                    </Col>
                </Row>
            <GeneratedMedia/>
            
        </div>
        
    )
}


/**
 * these are the thumbnails which show "Previous Projects"
 */
export default RecentlyUsed; 