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
}) {

  const [pass, setPass] = useState('hidden')
  const [starPass, setStarPass] = useState('block')
  const [card, setCard] = useState(password)
  const [editPass, setEditPass] = useState('')


  const openModal = () => {  
    setModal(true)  
    let a = arr.find(item => item.sait === sait)
    setCard(a)
    setEditPass(a.password)
  }
  console.log(card);
  console.log(editPass);

  const handleRemoveItem = () => {
    updateList(arr.filter(item => item.sait !== sait));
  }

  const reveal = () => {
    setPass('block')
    setStarPass('hidden')
  }

  const hide = () => {
    setPass('hidden')
    setStarPass('block')
  }

  return (
    <div className="container-card">
      <p className="name"> Name: {name}</p>
      <p className="Password"> Password: 
        <span className={starPass}>********</span> 
        <span className={pass}>
          {(editPass === '') 
          ? password
          : editPass}
        </span> 
      </p>
      <p className="Sait"> Sait: {sait}</p>
      <div className="container-button">
        <button className="button button-edit" onClick={openModal}>Edit password</button>
        <button className="button button-delete" onClick={handleRemoveItem}>delete line</button>
        <button className="button button-reveal" onClick={reveal}>Show password</button>
        <button className="button button-reveal" onClick={hide}>hide password</button>
      </div>
      {modal && 
          <div className="container-modal">
            <div className="card-modal">
              <ModalEdit
                onCancel={setModal}
                updateList={updateList}
                arr={arr}
                password={password}
                sait={sait}
                name={name}
                setEditPass={setEditPass}
              />
            </div>
          </div>
        }
    </div>
  )
}

export default Card;