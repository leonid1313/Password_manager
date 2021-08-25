import React, {useState} from 'react';
import './RegisterForm.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function RegisterForm () {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  let key = name;
  const submitValue = () => {
    if(key in localStorage){
      setError('A user with the same name already exists')
    } else {
    localStorage.setItem(key, JSON.stringify({name: name, password: password, email: email, information: []}));
    }
  }

  return (
    <div className="container-form-registration">
      <h1 className="title-registration">registration</h1>
      <div>
          <Link 
            className="link"
            to={{
              pathname: `/register`,
            }}
          >
            register
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
        className="register-form"
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
          <p>Enter your email</p>
          <input
          type="email"
          name="email"
          className="register-email"
          placeholder="Email"
          value={email}
          onChange={event => changeEmail(event)}
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
          className="register-button"
          onClick={submitValue}
        >{(key in localStorage)
            ? 'Register'
            : (<Link 
              className="link"
              to={{
                pathname: `/dashboard`,
              }}
            >
              Register
            </Link>)
        }
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;