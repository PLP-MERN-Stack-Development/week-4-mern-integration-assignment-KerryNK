import React, { createContext, useState, useEffect } from 'react';
import { fetchPosts, fetchCategories } from '../api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const postsData = await fetchPosts();
                const categoriesData = await fetchCategories();
                setPosts(postsData);
                setCategories(categoriesData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <AppContext.Provider value={{ posts, categories, loading, error }}>
            {children}
        </AppContext.Provider>
    );
};