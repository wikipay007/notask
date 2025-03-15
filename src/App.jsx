import React, { useState } from 'react';
import Header from "./components/Header";
import './styles/global.css';
import Hero from "./components/Hero";
import SectionBen from "./components/SectionBen";
import Modal from "./pages/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <Header />
        <Hero />
        <SectionBen />
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
        </Modal>
      </div>
    </>
  );
}

export default App;