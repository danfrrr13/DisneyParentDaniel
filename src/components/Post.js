import React from 'react';
import axios from 'axios';

const Post = ({ post, update }) => {
    const deletePost = e => {
        e.preventDefault();
        axios.delete(`https://disneyparent-backend.herokuapp.com/posts/${post.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        update();
    }
    return (
        <div className="Post">
            <h3>Title: {post.title}</h3>
            <h4>Location: {post.attraction}</h4>
            <p># of Children: {post.children}</p>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
};

export default Post;