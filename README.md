# book-store-reactApp# Book Store App
## watch project video https://www.linkedin.com/posts/ahmed-hani-elgazar_reactjs-redux-webdevelopment-activity-7237878583388450816-izSu?utm_source=share&utm_medium=member_desktop
## Overview

The **Book Store App** is a simple, intuitive app built with **React.js** and **Redux Toolkit**. It allows users to manage a collection of books, including the ability to add, view, edit, and delete books. The app also supports image handling, enabling users to upload and preview book covers using the `FileReader` API.

## Key Features

- **Book Management**: Users can easily add, view, edit, and delete books from the store.
- **Redux Toolkit**: Manages the app's global state and asynchronous actions for efficient data handling.
- **Image Handling**: Book cover images are handled using the `FileReader` API, allowing users to preview images before submitting.
- **Responsive Design**: Built using **Bootstrap** to ensure the app is responsive and mobile-friendly.
- **Mock Backend**: Integrated with **JSON Server** for mock API requests, simulating backend functionality.

## Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ahmed-Hani-cs/CRUD_App.git
Navigate to the Project Directory
=>  cd react_app

Install Dependencies => npm install

Start the JSON Server => npx json-server --watch db.json --port 5000

Start the React Application => npm start
