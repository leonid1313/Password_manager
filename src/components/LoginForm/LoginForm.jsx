import React, {useState} from 'react';
import './LoginForm.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function LoginForm () {

  localStorage.setItem("Leonid", JSON.stringify(
    {
      name: "Leonid",
      password: '1313',
      information: [
        {name: 'Leonid', password: 'you1313', sait: 'Youtube'},
        {name: 'Leonid1', password: 'work1313', sait: 'DOU'},
        {name: 'Leonid2', password: 'qwerty1313', sait: 'linkedin'},
        {name: 'Leonid3', password: 'maloi1313', sait: 'FavBet'}]
    }));

  const items = {...localStorage};
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  let arr = [];
  for (let i = 0; i < Object.values(items).length; i++) {
    let password = (JSON.parse(Object.values(items)[i]));
    arr.push(password.name, password.password)
  }

  const nameFind = Object.keys(items).find(function (element) {
    return element === name;
  });

  const passwordFind = arr.find(function (element) {
    return element === password;
  });

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const submitValue = () => {
    if ((nameFind && passwordFind) !== (name && password)){
      return setError('There is no user with such data. Check your details, or register.')
    } else {
      return (
        setError('')
      )
    }
  }

  return (
    <div className="container-form-login">
      <h1 className="title-login">Login</h1>
      <div>
          <Link 
            className="link"
            to={{
              pathname: `/register`,
            }}
          >
            Register
          </Link>
          <span> / </span>
          <Link 
            className="link"
            to={{
              pathname: `/login`,
            }}
          >
            Login
          </Link>
        </div>
      <form
        className="form-login"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="container-input">
        <p>Enter your name</p>
        <input 
          type="text"
          name="name"
          className="text-login" 
          placeholder="Name"
          value={name}
          onChange={event => changeName(event)}
        />
        </div>
        <div className="container-input">
          <p>Enter password</p>
          <input
          type="password"
          name="password"
          className="password-login"
          placeholder="Password"
          value={password}
          onChange={event => changePassword(event)}
        />
        </div>
        <div>{error}</div>
        <button
          className="button-login"
          onClick={() => submitValue()}
        > {((nameFind && passwordFind) !== (name && password))
            ? 'LogIn'
            : (<Link 
                className="link link-login"
                to={{
                  pathname: `/dashboard`,
                }}
              >
                LogIn
              </Link>)
        }
        </button>
      </form>
    </div>
  )
}

export default LoginForm;