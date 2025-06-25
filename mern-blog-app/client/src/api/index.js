import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts');
    }
};

export const fetchPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching post');
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating post');
    }
};

export const updatePost = async (id, postData) => {
    try {
        const response = await axios.put(`${API_URL}/posts/${id}`, postData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating post');
    }
};

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting post');
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching categories');
    }
};

export const createCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${API_URL}/categories`, categoryData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating category');
    }
};