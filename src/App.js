import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal'
import { FaWindowClose } from "react-icons/fa";

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="App">
      <button className="open-button" onClick = { () => setModalIsOpen(true) }>Open Modal</button>
      <Modal
        isOpen = { modalIsOpen } 
        shouldCloseOnOverlayClick = { false }
        onRequestClose = { () => setModalIsOpen(false) }
        style = {
          {
            overlay: {
              backgroundColor : 'rgba(0, 0, 0, 0.7)'
            },
            content: {
            
            width: '400px',
            top: '50%',
            left: '50%',          
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            }
          }
        }   
      >
        <FaWindowClose className="close-button" onClick = { () => setModalIsOpen(false) }/>
        <div className="modal-content">
          <h2>Welcome here...</h2>
          <p>
            Woohoo, you're reading this text in a modal!
          </p>
          <span>Press Close button or Esc button to close model</span>
        </div>
      </Modal>
    </div>
  );
}

export default App;