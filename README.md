# Deadass - File Transfer from Phone to PC using Node.js

This is a simple project that allows you to transfer files from your phone to your PC using Node.js, HTML, and ngrok. The server is set up using Express, and the file uploads are handled by `multer`.

## Features
- Simple file upload form.
- File transfer via HTTP POST request.
- Exposed via `ngrok` for public access.

## Requirements
- Node.js installed on your PC.
- ngrok for creating a public tunnel to your local server.
- An internet connection to run ngrok and access the server via a public URL.

## Setup Instructions

1. **Clone the repository** (or create a new directory for your project).

2. **Install dependencies**:

   ```bash
   npm install
Start the server:

    node server.js

    Open the generated ngrok URL to access the file upload form.

    Upload files from your phone: Open the URL on your phone and upload a file.

Usage

    Open the ngrok URL provided in the terminal after starting the server.
    Use the file upload form to choose a file from your phone and transfer it to your PC.
