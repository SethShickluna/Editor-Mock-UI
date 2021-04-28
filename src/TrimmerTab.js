import React, {useState} from "react";
import {Row, Col, Tooltip} from "reactstrap";
import {
    MdFastForward, MdFastRewind, MdReplay5, MdReplay30,
    MdPlayArrow, MdPause, MdBlock, MdInput, MdVerticalAlignCenter, MdTitle, MdSkipPrevious, MdSkipNext
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

    const [start, setStart] = useState(false)
    const toggleStart = () => setStart(!start)

    const [skip5, setSkip5] = useState(false)
    const toggleSkip5 = () => setSkip5(!skip5)

    const [skip30, setSkip30] = useState(false)
    const toggleSkip30 = () => setSkip30(!skip30)

    const [pause, setPause] = useState(false)
    const togglePause = () => setPause(!pause)

    const [play, setPlay] = useState(false)
    const togglePlay = () => setPlay(!play)

    const [end, setEnd] = useState(false)
    const toggleEnd = () => setEnd(!end)

    return ( 
            <Row>
                <Col>
                    <img alt="video preview" src={previewImage} className="trimmer-image-preview"></img>
                    <div className="trimmer-icon-container">
                        <MdSkipPrevious size={40} id="start" style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={start} target="start" toggle={toggleStart}>Jump to Start</Tooltip>
                        <MdReplay5 size={40} id="back-5" style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={skip5} target="back-5" toggle={toggleSkip5}>Go Back 5 Seconds</Tooltip>
                        <MdReplay30 size={40}  id="back-30" style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={skip30} target="back-30" toggle={toggleSkip30}>Go Back 30 Seconds</Tooltip>
                        <MdPlayArrow size={40} id="play" style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={play} target="play" toggle={togglePlay}>Play</Tooltip>
                        <MdPause size={40} id={"pause"} style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={pause} target="pause" toggle={togglePause}>Pause</Tooltip>
                        <MdSkipNext size={40} id="end" style={mediaControlStyle}/>
                        <Tooltip placement="bottom" isOpen={end} target="end" toggle={toggleEnd}>Jump to End</Tooltip>
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
                        <p className="Content-Subtitle">{props.name}</p>
                    </div>
                    <div className="trimmer-slider">
                        <CustomSlider name="Video"/>
                    </div>
                </Col>
            </Row>      
        
    )
}


export default TrimmerTab