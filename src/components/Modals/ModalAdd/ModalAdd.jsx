import React, {useState} from 'react';
import './ModalAdd.css'

const ModalAdd = ({
  onCancel,
  addLine
}) => {

  const closeModal = () => {
    onCancel(false)
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [sait, setSait] = useState('');

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const changeSait = (event) => {
    setSait(event.target.value)
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
          <form className="modal-add" onSubmit={(event) => event.preventDefault()}>
          <div className="container-input">
            <p>Enter your name</p>
            <input 
              type="text"
              name="name"
              className="input-modal-add" 
              placeholder="Name"
              value={name}
              onChange={event => changeName(event)}
            />
          </div>
          <div className="container-input">
            <p>Enter your password</p>
            <input 
              type="password"
              name="name"
              className="input-modal-add" 
              placeholder="Password"
              value={password}
              onChange={event => changePassword(event)}
            />
          </div>
          <div className="container-input">
            <p>Enter name of sait</p>
            <input 
              type="text"
              name="name"
              className="input-modal-add" 
              placeholder="Sait"
              value={sait}
              onChange={event => changeSait(event)}
            />
          </div>
            <button
              className="button-modal-add"
              onClick={addLine}
            >
              Add
            </button>
          </form>
        </div>
    </>
  );
}

export default ModalAdd;