const Post = require('../models/Post');
const Category = require('../models/Category');

// Get all blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('category', 'name');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a specific blog post
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('category', 'name');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create a new blog post
exports.createPost = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const newPost = new Post({ title, content, category });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: 'Error creating post', error });
    }
};

// Update an existing blog post
exports.updatePost = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content, category }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: 'Error updating post', error });
    }
};

// Delete a blog post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};