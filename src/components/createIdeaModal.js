import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { createIdea } from '../datastore/idea'
import '../styles/modal.css'

const CreateIdeaModal = ({ onHide, topicId, show }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const submitAction = async (event, value) => {
    event.preventDefault()

    if (value && (await createIdea(value, topicId))) {
      onHide()
      setValue('')
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Title>
        <h3 className="modal-title">Submit a new idea</h3>
      </Modal.Title>
      <Modal.Body>
        <Form onSubmit={(event) => submitAction(event, value)}>
          <Form.Control
            type="text"
            name="title"
            className="modal-text-input"
            value={value}
            onChange={handleChange}
            autoFocus
          />
          <div className="buttons">
            <button type="button" className="modal-close-button" onClick={onHide}>
              Close
            </button>
            <input type="submit" className="modal-submit-button" value="Submit" />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default CreateIdeaModal
