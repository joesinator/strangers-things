import React from 'react';

const PostDelete = ({post, token, setPosts}) => {
    try{const handleDelete = async () => {
      const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}`, {
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
    const {data} = await postsGet.json();
    setPosts(data.posts);
    };    
    return <button onClick={handleDelete}>Delete Post</button>;}catch(error){console.error(error);};
  };

export default PostDelete;