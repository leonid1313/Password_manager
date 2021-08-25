import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import Header from './components/Header/Header.jsx';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import DashboardInfo from './components/DashboardInfo/DashboardInfo';

function App() {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, []);

  return (
    <>
      {loader 
        ? (
          <>
            <Router>
              <Header />
              <Route path="/dashboard">
                <DashboardInfo/>
              </Route>
              <Route path="/register">
                <RegisterForm/>
              </Route>
              <Route path="/login">
                <LoginForm/>
              </Route>
              <Route path="/" exact component={LoginForm}/>
            </Router>
          </>
          )
        :  <Loader/>
      }
    </>
  )
}

export default App;
