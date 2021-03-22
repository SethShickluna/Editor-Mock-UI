//node imports
import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap"; 

//components
import HelpBox from "./HelpBox"; 
import MenuBar from "./MenuBar"; 
import VideoTab from "./VideoTab.js"; 
import GeneratedMedia from "./GeneratedMedia";
import Timeline from "./Timeline";
import SaveButton from "./SaveButton";

//images//assets
import homeIcon from "./homeicon.png"; 
import quickexportIcon from "./quickexport.png"; 
import shareIcon from "./shareicon.png";

//{props.location.editorProps.name}

let activeTab = 0; 

function getTabClass(index){
    if(index === activeTab){
        return "nav-tab-titles active-nav"; 
    }
    return "nav-tab-titles"; 
}

function navigate(obj){ 
    switch(obj.target.innerHTML){
        case "Trimmer":
            activeTab = 1; 
            break;
        case "Color":
            activeTab = 2; 
            break;
        case "Effects":
            activeTab = 3; 
            break;
        case "Audio":
            activeTab = 4; 
            break;
        case "Export":
            activeTab = 5; 
            break;
        default:
            activeTab = 0; 
            break;
    }
}

function displayTab(tabNum, name){
    switch(tabNum){
        case 1:
            //trimmer
            break;
        case 2:
            //color 
            break;
        case 3:
            //effects 
            break;
        case 4:
            //audio 
            break;
        case 5:
            //export
            break;
        default:
            //video 
            return Video(name);
    }
}

function Video(name){
    return(
        <Row> {/** Video timeline */}
            <Col className="col-md-2 auto grid-border"> {/** Media */}
                <h4 className="editor-subtitle centered">
                    Video Effects
                </h4>
                <GeneratedMedia/>
            </Col>
            <Col className=" auto grid-border" align="center"> {/**Timeline */}
                <VideoTab name={name} />
            </Col>
        </Row>
    )
}


function Editor(props){

    const [tab, setTab] = useState(0);

    return (
        <div>
            <Container fluid>
                <Row className="menu-filler">   
                    <MenuBar/>
                </Row>
                <Row className="grid-border">{/** Icons // Tabs // Export  */}
                    <Col className="col-md-3 auto" align="left">
                        <Row>
                            <Link to="/home"><img className="editor-image-icon" src={homeIcon}/></Link>
                            <SaveButton/>
                        </Row>
                    </Col>
                    <Col className="col-md-1" align="center"/>
                    <Col className="col-md-1 auto" align="center">
                        <div className="nav-tab-container">{/**Video */}
                            <h3 onClick={navigate} className={getTabClass(0)}>
                                Video
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Trimmer */}
                            <h3 onClick={navigate} className={getTabClass(1)}>
                                Trimmer
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Audio */}
                            <h3 onClick={navigate} className={getTabClass(4)}>
                                Audio
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Export */}
                            <h3 onClick={navigate} className={getTabClass(5)}>
                                Export
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center"/>
                    <Col className="col-md-3" align="right">
                        <div>
                            <img className="editor-image-icon" src={quickexportIcon}/>
                            <img className="editor-image-icon" src={shareIcon}/>
                        </div>
                    </Col>
                </Row>
                <Row > {/**Contains  2 columns */}
                    <Col className="auto"> {/**Contains part of the editor which switches via tab */}
                        {displayTab(activeTab, props.location.editorProps.name)}
                        <Row> {/** Video timeline */}
                            <Col className="col-md-2 auto grid-border"> {/** Media */}
                                <h4 className="editor-subtitle centered">
                                    Project Media
                                </h4>
                                <GeneratedMedia/>
                            </Col>
                            <Col className=" auto grid-border" align="center"> {/**Timeline */}
                                <Timeline />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{marginTop:"2%"}} className="col-md-2"> {/**Skinny help tab */}
                        <HelpBox/>
                    </Col>
                </Row>
            </Container>
        </div>    
    )
}


export default Editor; 