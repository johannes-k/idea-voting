import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CreateTopicModal from './createTopicModal'

const Header = () => {
  const [modalShow, setModalShow] = useState(false)

  const openModal = () => {
    setModalShow(true)
  }

  const closeModal = () => {
    setModalShow(false)
  }

  return (
    <>
      <header>
        <h1>Idea Board</h1>
        <button onClick={openModal} className="button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <CreateTopicModal show={modalShow} onHide={closeModal} />
    </>
  )
}

export default Header
