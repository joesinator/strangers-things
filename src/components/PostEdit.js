import React from 'react';

const PostEdit = ({post, token, setPosts}) => {
    
    const handleEdit = async () => {
        try{const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })}catch(error){console.error(error);};
      try{const postsGet = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  return postsGet;}catch(error){console.error(error);};
    const {data} = await postsGet.json();
    setPosts(data.posts);
    };    
    return <button onClick={handleEdit}>Edit Post</button>;
  };

export default PostEdit;