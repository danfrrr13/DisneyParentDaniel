import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Post from './Post';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://disneyparent-backend.herokuapp.com/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    }, []);
    return (
        <div className='PostList'>
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    );
};

export default PostsList;