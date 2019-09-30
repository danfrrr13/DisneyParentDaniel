import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePost = () => {
    const [post, setPost] = useState({});
    const changeHandler = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };
    const submitPost = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/Posts/${match.params.id}`, Post)
            .then(res => {
                console.log(res);
                history.push('/');
              })
            .catch(err => console.log(err));
    };
    return (
        <>
            <form onSubmit={submitPost}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={Post.title}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={Post.director}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="metascore"
                    placeholder="Metascore"
                    value={Post.metascore}
                    onChange={changeHandler}
                />
                <input
                    type="submit"
                />
            </form>
        </>
    )
}

export default UpdatePost;