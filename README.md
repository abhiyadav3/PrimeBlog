# PrimeBlog

**PrimeBlog** is a blog website that allows users to create accounts, write, upload, delete, and update blog posts, as well as upload images with their blogs. It provides a modern and user-friendly platform for content creation and management. PrimeBlog is designed to offer a seamless blogging experience with a focus on user interaction and content management. It leverages modern web technologies and a reliable backend service to ensure a scalable and maintainable platform.

## Features

- **User Authentication**: Secure sign-up, login, and account management.
- **Blog Management**: Create, update, delete, and view blog posts.
- **Image Upload**: Attach images to blog posts for enhanced content.
- **Text Editor**: Format and style blog content using an integrated editor.

## Tech Stack

- **Front-end**:
  - ReactJS
  - TailwindCSS

- **Back-end**:
  - Appwrite services (for user authentication, data storage, and content management)

## Installation

### Front-end Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/PrimeBlog.git

2. **Navigate to the Project Directory**

   ```bash
   cd PrimeBlog

3. **Install Dependencies**
For the front-end:
   ```bash
   cd client
   npm install
For the back-end, make sure to configure Appwrite services as per the Appwrite documentation.

4. **Start the Development Server**
For the front-end:
   ```bash
   cd client
   npm start

## Configuration

1. **Appwrite Setup**: Make sure to set up Appwrite services and configure the necessary endpoints and API keys in your project. Follow the [Appwrite documentation](https://appwrite.io/docs) for setup instructions.

2. **Environment Variables**: Create a `.env` file in the root directory and configure the necessary environment variables for your Appwrite project.

   Example `.env` file:
   ```env
   REACT_APP_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   REACT_APP_APPWRITE_PROJECT_ID=<your-appwrite-project-id>

## Usage

- **Create an Account**: Sign up to start using the blog platform.
- **Write a Blog Post**: Use the text editor to create new blog posts.
- **Manage Posts**: Update or delete your blog posts as needed.
- **Upload Images**: Attach images to your posts for richer content.


