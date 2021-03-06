import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Input, Form, 
} from 'reactstrap';

const InputForm = (props) => {
    const {
      buttonLabel,
      className,
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const [name, setName] = React.useState("");

      const updateName = obj => {
        setName(obj.target.value);
      };
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button size="lg" color="primary" onClick={toggle}>{buttonLabel}</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Enter Project Name</ModalHeader>
                <ModalBody>
                    <Input type="username" placeholder="untitled project" rows={1} onChange={updateName}/>
                </ModalBody>
                <ModalFooter>
                <Link className="New-Project-Link" to={{pathname:"/editor", 
                        editorProps:{name:name + ".sse"}}}>
                    <Button color="primary" onClick={toggle}>Create Project</Button>{' '}
                </Link>
                <Link className="New-Project-Link" to='/home'>
                    <Button color="secondary" onClick={toggle}>Back</Button>
                </Link>
                    
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default InputForm;
