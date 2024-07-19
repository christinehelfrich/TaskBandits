import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const BasicModal = (
  {openButtonType, 
    openButtonWording, 
    successButtonWording, 
    cancelButtonWording, 
    modalHeaderWording,
    children
  }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className={openButtonType} type="button">{openButtonWording}</button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeaderWording ? modalHeaderWording : 'Modal heading'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
        <Modal.Footer>
          {cancelButtonWording && <button className='button-secondary' onClick={handleClose}>
            {cancelButtonWording}
          </button>}
          <button className='button-primary' onClick={handleClose}>
            {successButtonWording ? successButtonWording : 'OK'}
          </button>
        </Modal.Footer>

        </Modal>
      
    </>
  )
}

export default BasicModal
