import React,  {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {
  AccountForm
} from './components';

const App = () => {
  return <div>Hello world</div>
  // const [token, setToken] = useState('');
  // const [user, setUser] = useState({});
  // console.log('token: ', token);

  // return <>
  //   <h1>
  //     Stranger's Things
  //   </h1>
  //   {user.username && <div>Hello {user.username}</div>}
  //   <Route path="/login">
  //     <AccountForm type={'login'} setToken={setToken} setUser={setUser} />
  //   </Route>
  //   <Route path="/register">
  //     <AccountForm type={'register'} setToken={setToken} setUser={setUser} />
  //   </Route>
  // </>
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);