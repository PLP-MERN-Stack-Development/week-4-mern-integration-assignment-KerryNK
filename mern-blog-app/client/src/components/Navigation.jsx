import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/create">Create Post</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;