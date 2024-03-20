import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BasicModal = ({openButtonType, openButtonWording, successButtonWording, cancelButtonWording}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <button onClick={handleShow} className={openButtonType} type="button">{openButtonWording}</button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className='button-secondary' onClick={handleClose}>
            Close
          </button>
          <button className='button-primary' onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>

        </Modal>
      
    </div>
  )
}

export default BasicModal
