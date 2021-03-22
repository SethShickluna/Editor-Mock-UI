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

function getTabClass(index, myTab){
    if(index === myTab){
        return "nav-tab-titles active-nav"; 
    }
    return "nav-tab-titles"; 
}

function displayTab(tabNum, name){
    switch(tabNum){
        case 1:
            return Trimmer(); 
        case 2:
            return Audio(); 
        case 3:
            return Export(); 
        default: //realistically this is always 0
            //video 
            return Video(name);
    }
}

function Trimmer(){
    return(
        <Row> {/** Video timeline */}
            <Col className="auto grid-border"> {/** Media */}
                <div className="tab-container"></div>
            </Col>
        </Row>
    )
}

function Audio(){
    return(
        <Row> {/** Video timeline */}
        <Col className="auto grid-border"> {/** Media */}
            <div className="tab-container"></div>
        </Col>
    </Row>
    )
}

function Export(){
    return(
        <Row> {/** Video timeline */}
            <Col className="auto grid-border"> {/** Media */}
                <div className="tab-container"></div>
            </Col>
        </Row>
    )
}

function Video(name){
    return(
        <Row style={{minHeight: "500px"}}> {/** Video timeline */}
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
    let projectName;
    if(props.location.editorProps === undefined){
        projectName = "untitled.sse"
    }else{
        projectName = props.location.editorProps.name; 
    }

    const [tab, setTab] = useState(0);

    const updateTab = obj => {
        switch(obj.target.innerHTML){
            case "Video":
                setTab(0);
                break; 
            case "Trimmer": 
                setTab(1);
                break; 
            case "Audio":
                setTab(2); 
                break; 
            case "Export":
                setTab(3);
                break;
        }
        
    };


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
                            <h3 onClick={updateTab} className={getTabClass(0, tab)}>
                                Video
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Trimmer */}
                            <h3 onClick={updateTab} className={getTabClass(1, tab)}>
                                Trimmer
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Audio */}
                            <h3 onClick={updateTab} className={getTabClass(2, tab)}>
                                Audio
                            </h3>
                        </div>
                    </Col>
                    <Col className="col-md-1" align="center">
                        <div>{/**Export */}
                            <h3 onClick={updateTab} className={getTabClass(3, tab)}>
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
                        {displayTab(tab, projectName)}
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