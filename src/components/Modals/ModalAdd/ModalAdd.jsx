import React, {useState} from 'react';
import './ModalAdd.css'

const ModalAdd = ({
  onCancel,
  arr,
  updateList,
  items
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

  const addLine = () => {
    arr.push({'name': name, 'password': password, 'sait': sait, id: arr.length + 1})
    JSON.parse((Object.values(items))).information.push({'name': name, 'password': password, 'sait': sait, id: arr.length + 1})
    delete localStorage.Leonid
    delete JSON.parse((Object.values(items))).information
    JSON.parse((Object.values(items)))
    localStorage[JSON.parse(Object.values(items)).name] = JSON.parse(JSON.stringify(Object.values(items)));
    // localStorage.setItem(JSON.parse(Object.values(items)).name, JSON.parse(JSON.stringify(Object.values(items))))
    updateList(arr)
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