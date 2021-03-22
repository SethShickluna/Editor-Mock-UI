import React from "react"; 
import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap"; 

import previewImage from "./preview.jpeg"; 

function VideoTab(props){ 

    return ( 
        <div className="tab-content-view">
             <p className="Content-Subtitle">{props.name}</p>
            <img src={previewImage} className="image-preview"></img>
        </div>
    )
}


export default VideoTab