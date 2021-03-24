import React from "react"; 
import {Row, Col} from "reactstrap"; 
import { 
    MdFastForward, MdFastRewind, MdReplay5, MdReplay30, 
    MdPlayArrow, MdPause, MdBlock, MdInput, MdVerticalAlignCenter, MdTitle
} from "react-icons/md";

import CustomSlider from "./CustomSlider";

import previewImage from "./preview.jpeg"; 
import trimmedMedia from "./trimmedMedia.png";

const mediaControlStyle = {
    margin: "7px", 
    color: "white", 
}

const iconStyle = {
    color: 'white', 
    marginLeft: "2px", 
}


function TrimmerTab(props){ 

    return ( 
            <Row>
                <Col>
                    <img alt="video preview" src={previewImage} className="trimmer-image-preview"></img>
                    <div className="trimmer-icon-container">
                        <MdFastRewind size={40} style={mediaControlStyle}/>
                        <MdReplay5 size={40} style={mediaControlStyle}/>
                        <MdReplay30 size={40} style={mediaControlStyle}/>
                        <MdPlayArrow size={40} style={mediaControlStyle}/>
                        <MdPause size={40} style={mediaControlStyle}/>
                        <MdFastForward size={40} style={mediaControlStyle}/>
                    </div>
                    <div className="trimmer-bar">
                        <p className="media-subtitle">Trim Media</p>
                        <MdInput style={iconStyle}/>
                        <MdBlock style={iconStyle}/>
                        <MdVerticalAlignCenter style={iconStyle}/>
                        <MdTitle style={iconStyle}/>
                        <img alt="trimmed media" className="trimmed-media-picture"src={trimmedMedia}/>
                        <img alt="trimmed media" className="trimmed-media-picture"src={trimmedMedia}/>
                        <img alt="trimmed media" className="trimmed-media-picture"src={trimmedMedia}/>
                    </div>
                </Col>
                <Col>
                    <img alt="trimmer preview" src={previewImage} className="trimmer-image-preview"></img>
                    <div className="trimmer-icon-container">
                        <p className="Content-Subtitle">Project Preview</p>
                    </div>
                    <div className="trimmer-slider">
                        <CustomSlider name="Video"/>
                    </div>
                </Col>
            </Row>      
        
    )
}


export default TrimmerTab