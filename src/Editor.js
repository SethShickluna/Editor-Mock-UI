//node imports
import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import {Container, Row, Col, Button, Tooltip} from "reactstrap"; 

//components
import HelpBox from "./HelpBox"; 
import MenuBar from "./MenuBar"; 
import VideoTab from "./VideoTab.js"; 
import GeneratedMedia from "./GeneratedMedia";
import Timeline from "./Timeline";
import SaveButton from "./SaveButton";
import TrimmerTab from "./TrimmerTab";
import AudioTab from "./AudioTab";
import EffectsPanel from "./EffectsPanel";
import AudioEffectsPanel from "./AudioEffectsPanel";
import ExportTab from "./ExportTab";
import RecentlyUsed from "./RecentlyUsed";
import ExportOptionForm from "./ExportOptionForm";

//images//assets
import homeIcon from "./homeicon.png"; 
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
            return Trimmer(name); 
        case 2:
            return Audio(); 
        case 3:
            return Export(name); 
        default: //realistically this is always 0
            //vi deo 
            return Video(name);
    }
}

function Trimmer(name){
    return(
        <Row> {/** Video timeline */}
            <Col className="auto grid-border"> {/** Media */}
                <div className="tab-container">
                     <TrimmerTab/>
                </div>
            </Col>
        </Row>
    )
}

function Audio(){
    return(
        <Row style={{minHeight: "500px"}}> {/** Video timeline */}
            <Col className="col-md-2 auto grid-border"> {/** Media */}
                <h4 className="editor-subtitle centered">
                    Audio Effects
                </h4>
                <AudioEffectsPanel/>
            </Col>
            <Col className=" auto grid-border" align="center"> {/**Timeline */}
                <AudioTab />
            </Col>
        </Row>
    )
}

function Export(name){

    return(
        <Row style={{minHeight: "500px"}}> {/** Video timeline */}
            <Col className="col-md-2 auto grid-border"> {/** Media */}
                <h4 className="editor-subtitle centered">
                    One Click Export
                </h4>
                <ExportTab/>
            </Col>
            <Col className="col-md-2 auto grid-border"> {/** Media */}
                <h4 className="editor-subtitle centered">
                    File Options
                </h4>
                <ExportOptionForm name={name}/>
            </Col>
            <Col className=" auto grid-border" align="center"> {/**Timeline */}
                <VideoTab name={"Project Preview"} />
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
                <EffectsPanel/>
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
            default:
                setTab(3);
                break;
        }
        
    };

    const [help, toggleHelp] = useState(false); 
    const setHelp = () => toggleHelp(!help);

    const [homeToolTipOpen, setTooltipOpen] = useState(false);
    const toggleHomeToolTip = () => setTooltipOpen(!homeToolTipOpen);

    const [saveToolTipOpen, setSaveTooltipOpen] = useState(false);
    const toggleSaveToolTip = () => setSaveTooltipOpen(!saveToolTipOpen);

    const [shareToolTipOpen, setShareTooltipOpen] = useState(false);
    const toggleShareToolTip = () => setShareTooltipOpen(!shareToolTipOpen);


    return (
        <div>
            <Container fluid>
                <Row className="menu-filler">   
                    <MenuBar/>
                </Row>
                <Row className="grid-border">{/** Icons // Tabs // Export  */}
                    <Col className="col-md-3 auto" align="left">
                        <Row>
                            <Link to="/home"><img alt="home button" className="editor-image-icon" id="home-tooltip"src={homeIcon}/></Link>
                            <Tooltip placement="bottom" isOpen={homeToolTipOpen} target="home-tooltip"toggle={toggleHomeToolTip}>Return To Menu</Tooltip>
                            <SaveButton/>
                            <Tooltip placement="bottom" isOpen={saveToolTipOpen} target="save-tooltip"toggle={toggleSaveToolTip}>Save Project As</Tooltip>
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
                            <Button onClick={setHelp}> {help ? "Hide Help Menu" : "Show Help Menu"}</Button>
                            <img alt="share icon"className="editor-image-icon" id="share-tooltip" src={shareIcon}/>
                            <Tooltip placement="bottom" isOpen={shareToolTipOpen} target="share-tooltip"toggle={toggleShareToolTip}>Share With...</Tooltip>
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
                        
                        {help?
                        <Col style={{marginTop:"2%"}} className="col-md-2"> {/**Skinny help tab */}
                            <HelpBox/>
                        </Col>: 
                        <Col className="col-md-2 auto grid-border" align="left"> {/**Skinny help tab */}
                            <h4 className="editor-subtitle centered">
                                Recently Used Effects & Media
                            </h4>
                            <RecentlyUsed/>
                        </Col>}
                </Row>
            </Container>
        </div>    
    )
}


export default Editor; 