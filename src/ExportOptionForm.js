

import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import {
  InputGroup,
  InputGroupText, 
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
 } from 'reactstrap';

const ExportOptionForm = (props) => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggleDropDown1 = () => setDropdownOpen1(!dropdownOpen1);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggleDropDown2 = () => setDropdownOpen2(!dropdownOpen2);


  return (
    <div>
        <p className="editor-subtitle">Project Name</p>
      <InputGroup>
        <Input placeholder={props.name.substring(0, props.name.length - 4)}/>
        <InputGroupAddon addonType="append">
          <InputGroupText>.sse</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <p className="editor-subtitle">File Type</p>
      <InputGroup>
        <Input placeholder={"MP4"} disabled/>
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen1} toggle={toggleDropDown1}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Choose a File Type</DropdownItem>
            <DropdownItem>MP4</DropdownItem>
            <DropdownItem>MKV</DropdownItem>
            <DropdownItem>SSE</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
      <p className="editor-subtitle">Video Resolution</p>
      <InputGroup>
        <Input placeholder={"1920x1080"} disabled/>
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen2} toggle={toggleDropDown2}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header> Video Resolution</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Custom</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>3840x2160 4K</DropdownItem>
            <DropdownItem>1280x720</DropdownItem>
            <DropdownItem>600x400</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
      <div className="export-button">
           <Link to="/export"><Button color="danger">Export Video</Button></Link>
      </div>
     
    </div>
    
  );
}


export default ExportOptionForm;
