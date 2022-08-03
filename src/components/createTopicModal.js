import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { createTopic } from '../datastore/topic'
import '../styles/modal.css'

const CreateTopicModal = ({ onHide, show }) => {
  const [value, setValue] = useState({
    title: '',
    description: ''
  })

  const handleChange = (event) => {
    setValue((currentValue) => {
      const val = { ...currentValue }
      val[event.target.name] = event.target.value
      return val
    })
  }

  const submitAction = async (event, { title, description }) => {
    event.preventDefault()

    if (title && description && (await createTopic(title, description))) {
      onHide()
      setValue({
        title: '',
        description: ''
      })
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Title>
        <h3 className="modal-title">Submit a new topic</h3>
      </Modal.Title>
      <Modal.Body>
        <Form onSubmit={(event) => submitAction(event, value)}>
          <Form.Control
            type="text"
            name="title"
            className="modal-text-input"
            value={value?.title}
            onChange={handleChange}
            placeholder="Title"
            autoFocus
          />
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            className="modal-text-area"
            value={value?.description}
            placeholder="Description"
            onChange={handleChange}
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

export default CreateTopicModal
