import React, {Fragment} from 'react';
import PostDelete from './PostDelete';
//import MessageDelete from './MessageDelete';

const Profile = ({user, token, posts, setPosts}) => {
    const userPosts = posts.filter(post => post.isAuthor ? true : false); 
        return <div id="profile">
            <div id="profileMessages">
                <h2>Your Messages</h2>
                {user.messages ? user.messages.map((message, idx) => {
                    return <Fragment key={idx}>
                    <h3>{message.post.title}</h3>
                    <h4>{message.fromUser.username}</h4>
                    <div>{message.content}</div>
                    </Fragment>
                }) : null}
            </div>
            <div id="profilePosts">
                <h2>Your Posts</h2>
                {userPosts ? userPosts.map((post, idx) => {
                    return <Fragment key={idx}>
                    <h3>{post.title}, {post.price}</h3>
                    <div>{post.description}</div>
                    {post.location ? <div>{post.location}</div> : null}
                    {post.willDeliver ? <div>Will Deliver</div> : null}
                    {post.isAuthor === true ? <PostDelete post={post} token={token} setPosts={setPosts} /> : null}
                    </Fragment>
                }) : null}
            </div>
      </div>
};

export default Profile;