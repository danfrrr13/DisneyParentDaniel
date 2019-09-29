import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="Post">
            <h3>Title: {post.title}</h3>
            <h4>Location: {post.attraction}</h4>
            <p># of Children: {post.children}</p>
        </div>
    );
};

export default Post;