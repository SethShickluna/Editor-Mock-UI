import React from "react"; 
import previewImage from "./preview.jpeg"; 

function VideoTab(props){ 

    return ( 
        <div className="tab-content-view">
             <p className="Content-Subtitle">{props.name}</p>
            <img alt="preview" src={previewImage} className="image-preview"></img>
        </div>
    )
}


export default VideoTab