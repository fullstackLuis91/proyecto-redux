📚 Social Bike - A Social Network for Bike Enthusiasts
Social Bike is a web-based social networking platform designed specifically for bike enthusiasts. It allows users to connect, share their biking experiences, and engage with a community of like-minded individuals. Built with a modern tech stack, Social Bike offers a seamless and interactive user experience.

🎯 Features
User Authentication

Registration: Users can create an account with their name, email, birthday, and password.
Login/Logout: Secure login and logout functionality using JWT-based authentication.
Session Management: User sessions are maintained with tokens stored in localStorage.
Posts

View Posts: Users can browse posts created by other members of the community.
Create Posts: Authenticated users can share their experiences by creating new posts.
Like/Unlike Posts: Engage with content by liking or unliking posts.
Post Details: View detailed information about a specific post by navigating to its dedicated page.
Search

Search Posts by Title: Easily find posts using the search functionality.
Error Handling

404 Page: A user-friendly 404 page is displayed when navigating to an invalid route.
Notifications

Success and error notifications are displayed for key user actions like registration and post creation.
🛠️ Tech Stack
Frontend
React.js: Core framework for building the UI.
Redux Toolkit: State management for user authentication, posts, and likes.
Ant Design: Component library for styling and interactive elements.
SCSS: Custom styles and component-specific styling for a polished look.
Backend
The backend is assumed to be implemented with a REST API architecture:
Node.js & Express: For handling API requests and responses.
MongoDB: As the database for storing user and post data.
📂 Folder Structure
src/components

Contains reusable React components like Header, Post, Posts, etc.
src/features/auth

Redux slices and services for user authentication.
src/features/post

Redux slices and services for managing posts and interactions.
src/styles

SCSS files for styling the application.
🔄 State Management
State management is handled using Redux Toolkit, which provides:

Centralized state for user authentication (authSlice) and posts (postsSlice).
createAsyncThunk for managing async API calls.
🚀 How to Run the Project
Prerequisites
Node.js (v14 or later)
npm or yarn
Backend server running on http://localhost:8080
Steps
Clone the repository:
bash
Copiar
Editar
git clone https://github.com/yourusername/social-bike.git
Navigate to the project directory:
bash
Copiar
Editar
cd social-bike
Install dependencies:
bash
Copiar
Editar
npm install
Start the development server:
bash
Copiar
Editar
npm start
Access the application at:
arduino
Copiar
Editar
http://localhost:3000
📸 Screenshots
1. Home Page
Displays all posts with options to like or view details.
2. Registration Page
User-friendly form for signing up.
3. Login Page
Simple login form for user authentication.
4. Post Creation
Form to add new posts and images for community engagement.
🛡️ Security
User authentication uses JWT tokens.
API requests for sensitive actions (like creating or liking posts) require an authorization header.
🤝 Contribution
Contributions are welcome! If you’d like to improve Social Bike, please fork the repository and submit a pull request.

📝 License
This project is licensed under the MIT License.

Enjoy your journey with Social Bike and share your passion for biking with the world! 🚴‍♂️