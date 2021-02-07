import React, {Fragment} from 'react';
import PostDelete from './PostDelete';
import MessageSend from './MessageSend';
import PostEdit from './PostEdit';

const Post = ({posts, token, setPosts}) => {
    return <>
    {posts ? posts.map((post, idx) => {
        return <Fragment key={idx}>
        <h3>{post.title}, {post.price}</h3>
        <div>{post.description}</div>
        {post.location ? <div>{post.location}</div> : null}
        {post.willDeliver ? <div>Will Deliver</div> : null}
        {post.isAuthor === true ? <PostEdit token={token} post={post} setPosts={setPosts} /> : null}
        {post.isAuthor === true ? <PostDelete post={post} token={token} setPosts={setPosts} /> : <MessageSend token={token} post={post} />}
        </Fragment>
      }) : null}
      </>
} ;

export default Post;