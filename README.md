# LinkedIn Clone

This project is a clone of LinkedIn built using React and Vite. It aims to provide a familiar interface and functionality similar to LinkedIn, allowing users to connect, share, and engage.

## Features

- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **Real-time Updates**: Utilizes React's state management for dynamic content updates.
- **User Authentication**: Secure login and registration process for users.
- **Profile Management**: Users can create and manage their profiles.
- **Post Sharing**: Users can create, edit, and delete posts.
- **Commenting and Liking**: Engage with posts through comments and likes.
- **Networking**: Connect with other users and manage connections.

## Technologies Used

- **Frontend**: 
  - React: A JavaScript library for building user interfaces.
  - Vite: A fast build tool and development server.
  - Tailwind CSS: A utility-first CSS framework for styling.

- **State Management**: 
  - Redux Toolkit: For managing application state.

- **Routing**: 
  - React Router: For navigating between different views.

## File Structure

```
linkedin-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Landing/
│   │   │   ├── CallToAction.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Testimonials.jsx
│   │   ├── Home/
│   │   │   ├── CreateNewPost.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── NewPostCard.jsx
│   │   │   ├── SidebarFooter.jsx
│   │   │   └── HomeRightSidebar.jsx
│   │   ├── Profile/
│   │   │   ├── UserProfile.jsx
│   │   │   ├── UserSidebar.jsx
│   │   │   └── ProfileFooter.jsx
│   │   ├── network/
│   │   │   ├── Invitation.jsx
│   │   │   ├── NetworkLeftSidebar.jsx
│   │   │   └── PeopleYouKnow.jsx
│   │   ├── Notifications.jsx
│   │   └── TextEditor.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authAPI.js
│   │   └── posts/
│   │       ├── postsSlice.js
│   │       └── postsAPI.js
│   ├── layouts/
│   │   ├── AuthLayout.jsx
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── ArticleWriter.jsx
│   │   ├── Home.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Messages.jsx
│   │   ├── Network.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   ├── SignUp.jsx
│   │   └── Jobs.jsx
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── App.css
├── .eslintrc.js
├── package.json
└── vite.config.js
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/linkedin-clone.git
   cd linkedin-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:3000` to see the application in action.

## Development

To run linting and ensure code quality, you can use ESLint:

```bash
npm run lint
```

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## TODO
1. Add authentication -> donel
2. working on Create new post 