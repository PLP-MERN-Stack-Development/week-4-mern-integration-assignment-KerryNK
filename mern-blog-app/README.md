# MERN Blog Application

## Overview
This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that serves as a blog platform. Users can create, read, update, and delete blog posts, as well as manage categories. The application features user authentication, image uploads, and a responsive UI.

## Features
- **User Authentication**: Registration and login functionality with protected routes.
- **Blog Management**: Create, edit, delete, and view blog posts.
- **Category Management**: Create and view categories for organizing posts.
- **Image Uploads**: Upload featured images for blog posts.
- **Pagination**: Navigate through posts with pagination.
- **Search and Filter**: Search and filter posts by category and other criteria.
- **Comments**: Users can leave comments on blog posts.

## Technologies Used
- **Frontend**: React.js, Vite, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Middleware**: Authentication, error handling, and validation
- **State Management**: React Context API and custom hooks

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-blog-app
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` files in both `client` and `server` directories to `.env` and fill in the required values.

### Running the Application
1. Start the server:
   ```
   cd server
   npm run dev
   ```

2. Start the client:
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Documentation
### Blog Posts
- **GET /api/posts**: Retrieve all blog posts.
- **GET /api/posts/:id**: Retrieve a specific blog post by ID.
- **POST /api/posts**: Create a new blog post.
- **PUT /api/posts/:id**: Update an existing blog post.
- **DELETE /api/posts/:id**: Delete a blog post.

### Categories
- **GET /api/categories**: Retrieve all categories.
- **POST /api/categories**: Create a new category.

## Screenshots
*(Include screenshots of the application here)*

## License
This project is licensed under the MIT License.