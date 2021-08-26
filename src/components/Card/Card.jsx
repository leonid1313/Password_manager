import React, {useState} from 'react';
import './Card.css';
import ModalEdit from '../Modals/ModalEdit/ModalEdit';

function Card ({
  arr,
  name,
  password,
  sait,
  updateList,
  setModal,
  modal,
  id,
  setInitialValue,
  updateLocalStorage,
}) {

  const [passwordValue, setPasswordValue] = useState('hidden')
  const [passwordStar, setPasswordStar] = useState('block')
  const [editPassword, setEditPassword] = useState(password)

  const openModal = () => {  
    setModal(true)
    setEditPassword(arr.find(item => item.id === id).password)
  }

  const handleRemoveItem = () => {
    updateList(arr.filter(item => item.id !== id));
    setInitialValue(updateLocalStorage)
  }

  const revealPassword = () => {
    setPasswordValue('block')
    setPasswordStar('hidden')
  }

  const hidePassword = () => {
    setPasswordValue('hidden')
    setPasswordStar('block')
  }

  return (
    <div className="container-card">
      <p className="name"> Name: {name}</p>
      <p className="Password"> Password: 
        <span className={passwordStar}>********</span> 
        <span className={passwordValue}>{editPassword}</span> 
      </p>
      <p className="Sait"> Sait: {sait}</p>
      <div className="container-button">
        <button className="button button-edit" onClick={openModal}>Edit password</button>
        <button className="button button-delete" onClick={handleRemoveItem}>delete card</button>
        <button className="button button-reveal" onClick={revealPassword}>Show password</button>
        <button className="button button-reveal" onClick={hidePassword}>hide password</button>
      </div>
      {modal && 
          <div className="container-modal">
            <div className="card-modal">
              <ModalEdit
                onCancel={setModal}
                setEditPassword={setEditPassword}
              />
            </div>
          </div>
        }
    </div>
  )
}

export default Card;