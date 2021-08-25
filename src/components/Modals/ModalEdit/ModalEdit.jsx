import React from 'react';
import './ModalEdit.css'

const ModalEdit = ({
  onCancel,
}) => {

  const closeModal = () => {
    onCancel(false)
  }

  return (
    <>
        <div className="card">
          <button
            onClick={closeModal}
            className="button-close"
          >
            X
          </button>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type='password' />
            <button>Eddit</button>
          </form>
        </div>
    </>
  );
}

export default ModalEdit;