import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPost, updatePost, getPost } from '../api';

const PostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchPost = async () => {
                try {
                    const post = await getPost(id);
                    setTitle(post.title);
                    setContent(post.content);
                } catch (err) {
                    setError('Failed to fetch post');
                }
            };
            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isEditing) {
                await updatePost(id, { title, content });
            } else {
                await createPost({ title, content });
            }
            navigate('/');
        } catch (err) {
            setError('Failed to save post');
        }
    };

    return (
        <div>
            <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default PostForm;