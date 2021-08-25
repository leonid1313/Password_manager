import React, {useState} from 'react';
import './DashboardInfo.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '../Card/Card.jsx'
import ModalAdd from '../Modals/ModalAdd/ModalAdd';

function DashboardInfo ({
  ...props
}) {

  console.log(props);
  const items = {...localStorage};
  let arr = [];
  for (let i = 0; i < Object.values(items).length; i++) {
        (Object.keys(items)).find(function (element) {
          if (element === ((JSON.parse(Object.values(items)[i])).name)) {
            arr.push(...(JSON.parse(Object.values(items)[i])).information)
          } 
        });
  }

  const [modal, setModal] = useState(false)
  const [arrValues, setArrValues] = useState(arr)

  const openModal = () => {    
    setModal(true)
  }

  const addLine = () => {
    setArrValues([...arr])
    setModal(false)
  }

  return (
    <div className="container-dashboard">
      <h1 className="title-dashboard">Information</h1>
      <Link 
        className="link"
        to={{
          pathname: `/login`,
        }}
      >
        Log out
      </Link>
      <div>
      { arrValues.map(item => (
            <div className="container-info">
              <Card
                key={item.name}
                name={item.name}
                password={item.password}
                sait={item.sait}
                arr={arrValues}
              />
            </div>
          ))
      }
      </div>
      <button 
        className="add"
        onClick={openModal}
      >
        Add new line
      </button>
      {modal && 
          <div className="container-modal">
            <div className="card-modal">
              <ModalAdd
                onCancel={setModal}
                addLine={addLine}
              />
            </div>
          </div>
        }
    </div>
  )
}

export default DashboardInfo;