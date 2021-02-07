import React, {useState} from 'react';

const PostAdd = ({token, posts, setPosts}) => {
    if(!token){
        return <></>;
    }
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [willDeliver, setWillDeliver] = useState(false);
    const [location, setLocation] = useState('');
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try{const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: willDeliver,
                    location: location
                }
            })
        });
        const {data} = await response.json();
        setPosts([data.post, ...posts]);
        setTitle('');
        setDescription('');
        setPrice(0);
        setWillDeliver(false);
        setLocation('');}catch(error){console.error(error);}
    };
    return <>
    <h2>Add New Post</h2>
    <form onSubmit={handleSubmit} id="postAddDetails">
        <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="Item"></input>
        <input type="text" value={price} onChange={(ev) => setPrice(ev.target.value)} placeholder="Price"></input>
        <input type="text" value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="Description"></input>
        {/* <input type="checkbox" name="Will Deliver?" value={willDeliver} onChange={() => setWillDeliver(true)}></input> */}
        <input type="text" value={location} onChange={(ev) => setLocation(ev.target.value)} placeholder="Location"></input>
        <button type="submit">Post</button>
    </form>
</>;
};

export default PostAdd;