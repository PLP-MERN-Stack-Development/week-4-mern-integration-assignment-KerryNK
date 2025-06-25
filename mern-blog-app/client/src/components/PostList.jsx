import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { fetchPosts } from '../api';
import Post from './Post';

const PostList = () => {
    const { posts, setPosts } = useContext(AppContext);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };

        getPosts();
    }, [setPosts]);

    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map(post => <Post key={post._id} post={post} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default PostList;