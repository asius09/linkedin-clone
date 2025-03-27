# LinkedIn Clone - Professional Networking Platform

Experience a modern LinkedIn-inspired platform built with cutting-edge web technologies. This full-stack application combines React's component architecture with Tailwind CSS's utility-first styling, offering users a comprehensive suite of professional networking features. Powered by Appwrite's backend-as-a-service, it delivers a robust environment for content creation, media management, and social interactions.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Application Architecture](#application-architecture)
- [Setup & Installation](#setup--installation)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [License Information](#license-information)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

This LinkedIn Clone reimagines professional networking with enhanced functionality and modern web development practices. The platform enables users to:

- Craft professional posts and in-depth articles using an intuitive rich text editor
- Manage multimedia content with advanced compression and preview capabilities
- Engage with community content through interactive reactions and comments
- Experience seamless navigation across devices with responsive design
- Enjoy personalized theming with built-in dark mode support

The application architecture leverages Appwrite for secure backend operations, ensuring efficient data handling, authentication, and routing mechanisms.

---

## Core Features

- **Comprehensive Content Management**  
  Full CRUD operations for articles and posts with version control capabilities
- **Advanced Rich Text Editor**  
  Powered by Tiptap, offering markdown support and real-time collaboration features
- **Intelligent Media Processing**  
  Integrated image compression and video transcoding using FFmpeg.wasm
- **Interactive Engagement System**  
  Real-time reactions including likes, comments, shares, and reposts
- **Adaptive User Interface**  
  Responsive design with Tailwind CSS, supporting multiple themes and accessibility standards
- **Scalable Backend Infrastructure**  
  Built on Appwrite for secure, distributed data management and API services

---

## Technology Stack

- **Frontend Framework:** React with Redux state management
- **Styling:** Tailwind CSS with custom theming
- **Content Editor:** Tiptap with extensions
- **Media Processing:** FFmpeg.wasm, browser-image-compression
- **Backend Services:** Appwrite (Database, Storage, Authentication)
- **Routing:** React Router with dynamic loading

---

## Project Structure

Below is an example of how the project is organized:

```
src/
├── assets/                  # Static images, icons, etc.
├── components/
│   ├── articles/            # Article-specific components (ArticleCard, ArticleFeed, ArticleReader, ArticleWriter)
│   ├── posts/               # Post-related components (PostCard, PostFeed, PostComposer)
│   ├── editor/              # Rich text editor components (TextEditor)
│   ├── ui/                  # UI components (Buttons, Divider, JoinNowLink, ReactionBtn, RememberMeCheckbox, Search, SidebarFooter)
│   ├── mediaHandlers/       # Media upload and preview components (ImageDropZone, MediaUploader, VideoPlayer)
│   └── common/              # Common components (UserAvatar, Alert, Footer, Navbar, NavForSmallerDevices, SignOutBtn, UserAvatar)
├── hooks/                   # Custom hooks (useAuth, useFetch, useMediaHandler)
├── services/                # API services (authService, contentService, fileService)
├── store/                   # Redux slices and store configuration
│   └── slices/
│       ├── authSlice.js
│       ├── contentSlice.js
│       ├── navigationSlice.js
│       ├── themeSlice.js
│       └── alertSlice.js    # For global alerts and notifications
├── utils/                   # Utility functions (formatDate, compressImage, compressVideo)
├── routes/                  # Routing definitions (AppRoutes, routes.js)
├── layouts/                 # Layouts
|   |-- MainLayout.jsx       # Main Layout which check's for auth
|   |-- AuthLayout.jsx       # Auth Layout for Signin.jsx and Logout.jsx
└── main.jsx                 # Application entry point
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/asius09/linkedin-clone.git
   cd linkedin-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Appwrite:**  
   Update the Appwrite configuration in `/src/config/config.js` with your project details.

4. **Run the development server:**

   ```bash
   npm start
   ```

---

## Usage

- **Creating Content:**  
  Navigate to the "New Post" or "New Article" section to create and update content using the rich text editor and media upload features.

- **Interacting with Posts:**  
  Users can react to posts with likes, comments, and shares directly from the feed.

- **Navigation:**  
  The application uses dynamic routing for seamless transitions between profiles, feeds, and content pages.

For a live demo and detailed code walkthrough, watch the demo video and check the complete code on GitHub:  
**https://github.com/asius09/linkedin-clone**

---

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

Please follow the existing code style and add relevant tests for new features.

---

## License

[MIT License](LICENSE)

---

## Credits

- **Developer:** Asius
- **Inspiration:** LinkedIn's interface and professional networking design principles.
- **Technologies:** React, Tailwind CSS, Appwrite, FFmpeg.wasm, tiptap

---

Feel free to adjust and expand this README to best fit your project’s details and requirements!

# Feature Flags

1. PostComposer - postComposer
2. PostDeleteModel - postDeleteModel
3. LanguageAndTheme - languageAndTheme
4. ProfileCard - profileCard
