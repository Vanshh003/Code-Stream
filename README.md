# Code-Stream

Code-Stream is a real-time code editor application built using Express, Node.js, React, and WebSockets. It allows users to write, edit, and collaborate on code in real-time, offering a seamless coding experience with instant updates.

## Features

- **Real-time Collaboration**: Multiple users can edit the same code simultaneously and see changes in real-time.
- **Integrated Monaco Editor**: Utilizes the Monaco Editor for a rich code editing experience with syntax highlighting and code completion.
- **WebSocket Communication**: Ensures instant updates and synchronization between users.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React, Monaco Editor
- **Real-time Communication**: WebSockets

## Getting Started

To get started with Code-Stream, follow these steps:

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Vanshh003/Code-Stream.git

2. **Navigate to the Project Directory**

    ```bash
    cd Code-Stream

2. **Install Dependencies**

    ```bash
    npm install

2. **Create a .env File**

    Copy .env.example to .env and configure your environment variables as needed.

2. **Start the Server**

    To start the server in *server.js* file, open the terminal and type the followint command.
    ```bash
    nodemon server.js

2. **Run the Frontend**

    To start the React application, open new terminal and type the following command.

    ```bash
    npm start


## Usage

Open your browser and navigate to http://localhost:3000 to access the Code-Stream application.
Collaborate with others in real-time by sharing the URL.


## Contributing

If you would like to contribute to the project, please follow these guidelines:

    1. Fork the repository.
    2. Create a new branch (git checkout -b feature-branch).
    3. Make your changes.
    4. Commit your changes (git commit -am 'Add new feature').
    5. Push to the branch (git push origin feature-branch).
    6. Create a new Pull Request.


## Acknowledgments
Monaco Editor: For providing a powerful code editor component.
WebSocket Libraries: For enabling real-time communication.

Feel free to reach out with any questions or issues you encounter.