import React, {useState} from 'react';
import './Card.css';
import ModalEdit from '../Modals/ModalEdit/ModalEdit';

function Card ({
  arr,
  name,
  password,
  sait
}) {

  const [modal, setModal] = useState(false);
  const [list, updateList] = useState([]);

  const openModal = () => {    
    setModal(true)
  }
  
  const handleRemoveItem = () => {
    updateList(arr.filter(item => item.sait !== sait));

    console.log(list);
  };

  return (
    <div className="container-card">
      <p className="name"> Name: {name}</p>
      <p className="Password"> Password: {password}</p>
      <p className="Sait"> Sait: {sait}</p>
      <div className="container-button">
        <button className="button button-edit" onClick={openModal}>Edit password</button>
        <button className="button button-delete" onClick={handleRemoveItem}>delete line</button>
        <button className="button button-reveal">reveal password</button>
      </div>
      {modal && 
          <div className="container-modal">
            <div className="card-modal">
              <ModalEdit
                onCancel={setModal}
              />
            </div>
          </div>
        }
    </div>
  )
}

export default Card;