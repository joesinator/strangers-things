import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {
  AccountForm,
  PostAdd,
  Post,
  Profile
} from './components';

import './style.css';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    try{const postsGet = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const {data} = await postsGet.json();
    setPosts(data.posts);}catch(error){console.error(error);}
  }, [token]);

  return <>
    <h1>
      Stranger's Things
    </h1>
    {user.username && <div>Hello {user.username}!</div>}
    {token ? <button onClick={()=>{
      setUser({});
      setToken('');
    }}>Logout</button> : null}
    <Link to="/login">
      Login
    </Link>
    <Link to="/posts">
      Posts
    </Link>
    <Link to="/profile">
      Profile
    </Link>
    <Route path="/login">
      <AccountForm type={'login'} setToken={setToken} setUser={setUser} />
    </Route>
    <Route path="/register">
      <AccountForm type={'register'} setToken={setToken} setUser={setUser} />
    </Route>
    <Route path="/posts">
      <PostAdd token={token} posts={posts} setPosts={setPosts} />
      <Post token={token} posts={posts} setPosts={setPosts} />
    </Route>
    <Route path="/profile">
      <Profile user={user} token={token} posts={posts} setPosts={setPosts}/>
    </Route>    
  </>
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);