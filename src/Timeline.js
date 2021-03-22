import React, {useState} from "react"; 
import {Container, Col, Row, Button} from "reactstrap"; 
import { 
    MdInput, MdBlock, MdVerticalAlignCenter, 
    MdTitle, MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious
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
                     <img src={trackImg[num - 1]} className="timeline-tracks"></img>
                </div>
            </Col>
        </Row>
    )
}

function Timeline(props){

    const [isPaused, pause] = useState(false); 

    return(
        <div className="timeline-container">
            <Container fluid>
                <Row>
                <Col className="col-md-5"align="left">
                        <div className="add-media-container">
                            <img src={VideoIcon} className="timeline-icons"/>
                            <img src={AudioIcon} className="timeline-icons"/>
                        </div>
                        
                </Col>
                    <Col className="auto" align="left">
                        <MdSkipPrevious size={40} style={mediaControlStyle}/>
                        <MdPlayArrow size={40} style={mediaControlStyle}/>
                        <MdPause size={40} style={mediaControlStyle}/>
                        <MdSkipNext size={40} style={mediaControlStyle}/>
                    </Col>
                </Row>
                {/**Generate 3 tracks */}
                {tracks.map((trackNum) => mediaTracks(trackNum))}  
            </Container>
        </div>
    )
}

export default Timeline; 