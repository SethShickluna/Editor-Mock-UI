import React, {useState} from "react";
import {Container, Col, Row, ToolTip, Tooltip} from "reactstrap";
import { 
    MdInput, MdBlock, MdVerticalAlignCenter, 
    MdTitle, MdPlayArrow, MdPause, MdSkipNext,
    MdSkipPrevious, MdReplay5, MdReplay30,
} from "react-icons/md";

//icons 
import VideoIcon from "./videoicon.png";
import AudioIcon from "./audioicon.png";
import VideoTrack from "./videoTrack.PNG"; 
import AudioTrack from "./audiotrack.PNG"; 

const iconStyle = {
    color: 'white', 
    marginLeft: "2px", 
}

const mediaControlStyle = {
    margin: "7px", 
    color: "white", 
}

const trackNames = ["Video", "Audio"]
const trackImg = [VideoTrack, AudioTrack]; 

const tracks = [1, 2];

function mediaTracks(num){
    return (
        <Row>
            <Col className="auto"align="left">
                <div className="track-title-content">
                     <p className="media-subtitle">Track {num} - {trackNames[num - 1]}</p>
                     <MdInput style={iconStyle}/>
                     <MdBlock style={iconStyle}/>
                     <MdVerticalAlignCenter style={iconStyle}/>
                     <MdTitle style={iconStyle}/>
                     <img alt="timeline item" src={trackImg[num - 1]} className="timeline-tracks"></img>
                </div>
            </Col>
        </Row>
    )
}

function Timeline(props){

    const [vidToolTipOpen, setVidToolTipOpen] = useState(false);
    const toggleVidOpen = () => setVidToolTipOpen(!vidToolTipOpen);

    const [audioToolTipOpen, setAudioToolTipOpen] = useState(false);
    const toggleAudioOpen = () => setAudioToolTipOpen(!audioToolTipOpen);

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

    //const [isPaused, pause] = useState(false); 

    return(
        <div className="timeline-container">
            <Container fluid>
                <Row>
                <Col className="col-md-5"align="left">
                        <div className="add-media-container">
                            <img alt="icon a" src={VideoIcon} id="add-vid-track" className="timeline-icons"/>
                            <Tooltip placement="bottom" isOpen={vidToolTipOpen} target="add-vid-track" toggle={toggleVidOpen}>Insert Video Track</Tooltip>
                            <img alt="icon b"src={AudioIcon}  id="add-audio-track" className="timeline-icons"/>
                            <Tooltip placement="bottom" isOpen={audioToolTipOpen} target="add-audio-track" toggle={toggleAudioOpen}>Insert Audio Track</Tooltip>
                        </div>
                        
                </Col>
                    <Col className="auto" align="left">
                        <div className="timeline-controls">
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
                        
                    </Col>
                </Row>
                {/**Generate 3 tracks */}
                {tracks.map((trackNum) => mediaTracks(trackNum))}  
            </Container>
        </div>
    )
}

export default Timeline; 