import React from "react"; 
import { Row, Col,  } from "reactstrap";
import previewImage from "./preview.jpeg"; 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import CustomSlider from "./CustomSlider";

const useStyles = makeStyles({
    root: {
      height: 300,
    },
});

const labelStyles = { 
    color: "white",
}
const sliderStyle = {
    marginLeft: 10,
}

function volumeSliders(){
    return (
        <div>

        </div>
    )
}

function VerticalSlider(){
    const classes = useStyles(); 

    return (
            <React.Fragment>
                <Typography id="vertical-slider" style={labelStyles} gutterBottom>
                        Volume | Bass | Gain
                </Typography>
                <div className={classes.root}>
                    <Slider style={sliderStyle}
                    orientation="vertical"
                    defaultValue={100}
                    aria-labelledby="vertical-slider"/>
                    <Slider
                    orientation="vertical"
                    defaultValue={25}
                    aria-labelledby="vertical-slider"/>
                    <Slider
                    orientation="vertical"
                    defaultValue={17}
                    aria-labelledby="vertical-slider"/>
                </div>
                </React.Fragment>
    )
}

function AudioTab(props){ 

    return ( 
        <div className="tab-content-view">
            <Row>
                <Col className="col-md-3">
                    <VerticalSlider/>
                </Col>
                <Col className="auto">
                    <img alt="preview" src={previewImage} className="image-preview"></img>
                </Col>
            </Row>
            <Row>
                <div style={{margin: "50px", marginLeft: "150px"}}>
                    <CustomSlider name="Audio"/>
                </div>
                
            </Row>
        </div>
    )
}


export default AudioTab;