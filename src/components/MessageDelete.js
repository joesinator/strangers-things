//import React, {useState} from 'react';

const MessageDelete = ({post, token}) => {
    const handleDelete = async () => {
      try{const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}/messages`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    });
    const postsGet = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const {data} = await postsGet.json();}catch(error){console.error(error);}
    };    
    return <button onClick={handleDelete}>Delete Message</button>;
  };

//export default MessageDelete;