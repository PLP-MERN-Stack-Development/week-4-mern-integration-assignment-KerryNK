# mern-blog

## Project Overview

This project is a MERN stack application that consists of a React front-end and an Express.js back-end. It serves as a blog platform where users can create, read, update, and delete blog posts.

## Project Structure

The project is organized into two main directories: `client` for the front-end and `server` for the back-end.

### Client

- public/: Contains static files such as images, icons, and the HTML file that serves as the entry point for the React application.
- src/: Contains the source code for the React application.
- components/: Reusable React components.
- pages/: Page components representing different views.
- hooks/: Custom React hooks for encapsulating reusable logic.
- services/: API service files for communication with the back-end.
- context/: React context providers for managing global state.
- App.jsx: Main application component that sets up routing and renders the application.
- package.json: Configuration file for the client-side application, listing dependencies and scripts.

### Server

- config/: Configuration files for the server, including environment variables and database settings.
- controllers/: Route controller files that define the logic for handling incoming requests.
- models/: Mongoose model files defining the schema for the MongoDB database.
- routes/: API route files defining the endpoints for the server.
- middleware/: Custom middleware functions for the request handling pipeline.
- utils/: Utility functions for use throughout the server application.
- server.js: Main server file that initializes the Express application and sets up middleware and routes.
- package.json: Configuration file for the server-side application, listing dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   `
   git clone <repository-url>
   `
2. Navigate to the client directory and install dependencies:
   `
   cd client
   npm install
   `
3. Navigate to the server directory and install dependencies:
   `
   cd ../server
   npm install
   `
4. Set up your environment variables in the server/config directory.
5. Start the server:
   `
   node server.js
   `
6. In a separate terminal, start the client:
   `
   cd ../client
   npm start
   `

## Usage

Once both the client and server are running, you can access the application in your web browser at `http://localhost:3000`. You can create, view, edit, and delete blog posts through the user interface.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
