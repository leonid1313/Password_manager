import React, {useState} from 'react';
import './ModalEdit.css'

const ModalEdit = ({
  onCancel,
  setEditPassword,
}) => {

  const [name, setName] = useState('');

  const closeModal = () => {
    onCancel(false)
  }

  const changePassword = (event) => {
    setName(event.target.value)
  }
  
  const renamePass = () => {
    setEditPassword(name)
    onCancel(false)
  }

  return (
    <>
        <div className="card-modal-edit">
          <h1 className="title-modal-edit">Edit password</h1>
          <button
            onClick={closeModal}
            className="button-close"
          >
            X
          </button>
          <form className="form-modal-edit" onSubmit={(event) => event.preventDefault()}>
            <input
              placeholder="Enter new password"
              className="input-modal-edit"
              type='password'
              name="editPassword"
              value={name}
              onChange={event => changePassword(event)}
            />
            <button className="button-modal-edit" onClick={renamePass}>Eddit</button>
          </form>
        </div>
    </>
  );
}

export default ModalEdit;