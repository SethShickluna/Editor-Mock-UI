import React from "react"; 
import {Row} from "reactstrap"; 
import {Link} from "react-router-dom"; 
import { 
    FaFacebook,
    FaYoutube, 
    FaTwitter, 
    FaAdobe, 
    FaFileAudio,
 } from "react-icons/fa";


const labelStyles = { 
    color: "#c8d6e5", 
    marginTop: "35px",
}

const iconStyles = {
    color: "white", 
    margin: "20px",
}

function ExportTab(props){ 
    let iconSize = 50; 

    return ( 
        <div className="tab-content-view">
            <Row>
                <Link to="/export"><FaYoutube className="export-icon"size={iconSize} style={iconStyles}/></Link>
                <p style={labelStyles}>Youtube Preset</p>
            </Row>
            <Row>
            <Link to="/export"><FaTwitter size={iconSize} className="export-icon"style={iconStyles}/></Link>
                <p style={labelStyles}>Twitter Preset</p>
            </Row>
            <Row>
            <Link to="/export"><FaFacebook size={iconSize} className="export-icon"style={iconStyles}/></Link>
                <p style={labelStyles}>Facebook Preset</p>
            </Row>
            <Row>
            <Link to="/export"><FaAdobe size={iconSize} className="export-icon"style={iconStyles}/></Link>
                <p style={labelStyles}>Adobe CC Preset</p>
            </Row>
            <Row>
            <Link to="/export"><FaFileAudio size={iconSize} className="export-icon"style={iconStyles}/></Link>
                <p style={labelStyles}>Audio Only</p>
            </Row>

           
        </div>
    )
}


export default ExportTab;