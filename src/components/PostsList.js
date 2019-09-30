import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Post from './Post';
import AddPost from './AddPost';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [flag, setFlag] = useState(false);
    const reloadPosts = () => {
        setFlag(!flag);
    }
    useEffect(() => {
        axios.get('https://disneyparent-backend.herokuapp.com/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    }, [flag]);
    return (
        <div className='PostList'>
            {posts.map(post => (
                <Post post={post} update={reloadPosts} />
            ))}
            <AddPost update={setPosts} />
        </div>
    );
};

export default PostsList;