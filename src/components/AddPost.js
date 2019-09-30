import React, { useState } from 'react';

import axios from 'axios';

const AddPost = ({ update }) => {
    const [post, setPost] = useState({
        parent_id: 1,
        title: "",
        attraction: "",
        children: null,
        time: ""
    });
    const changeHandler = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };
    const submitPost = e => {
        e.preventDefault();
        axios.post('https://disneyparent-backend.herokuapp.com/posts', post)
        .then(res => update(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div className="AddPost">
            <form onSubmit={submitPost}>
                <input onChange={changeHandler} name="title" placeholder="Title" value={post.title} />
                <input onChange={changeHandler} name="attraction" placeholder="Attraction" value={post.attraction} />
                <input onChange={changeHandler} name="children" placeholder="# of Children" value={post.children} />
                <input onChange={changeHandler} name="time" placeholder="Time" value={post.time} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPost;