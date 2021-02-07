import React, {useState, Fragment} from 'react';

const MessageSend = ({token, post}) => {
    if(!token){
        return <Fragment></Fragment>;
    };
    const [messages, setMessages] = useState('');
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try{const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({message: {content: messages}})
        });
        setMessages('');}catch(error){console.error(error);};
    };
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={messages} onChange={(ev) => setMessages(ev.target.value)} placeholder="Send a Message"></input>
            <button>Submit</button>
        </form>
    </>
};

export default MessageSend;