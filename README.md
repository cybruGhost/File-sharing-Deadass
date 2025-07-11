

---

# 📂 DEADASS —Best Phone to PC File Transfer using Node.js

**DEADASS** is a dead-simple local file transfer tool that lets you send files from your **phone to PC** over WiFi or the internet using **Node.js**, **Express**, **ngrok**, and a simple frontend.

> No apps. No cables. Just send files.

---

## ⚙️ Features

- Upload files from **any device** (phone, tablet, etc.)
- Uses `ngrok` to expose your local server online
- Handles uploads with `multer` middleware
- Clean web interface for uploading
- Uploaded files are saved to a local `uploads/` folder on your PC

---

## 🧰 Requirements

- **Node.js** (installed on your PC)
- **ngrok** (for creating a public tunnel)
- Internet connection (for ngrok access)

---

## 📁 Folder Structure

DEADASS/ │ ├── node_modules/          # Installed dependencies ├── public/                # Static frontend files │   ├── index.html │   ├── styles.css │   └── app.js ├── uploads/               # All uploaded files go here ├── server.js              # Express server code ├── package.json └── package-lock.json

---

## 🚀 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd DEADASS

2. Install Dependencies

npm install


3. Create the Uploads Folder

mkdir uploads


4. Start the Server

node server.js


5. Expose Locally with Ngrok

In a new terminal window:

ngrok http 3000


6. Transfer Files from Phone

Copy the ngrok URL shown (e.g., https://abc123.ngrok.io)

Open it in your phone browser

Upload a file — it will be saved to your PC in the uploads/ folder





---

🔐 Privacy

This project transfers files over an encrypted HTTPS tunnel (ngrok). Files are stored only on your machine in the uploads/ folder.


---

🪪 License

MIT License — free to use, modify, and vibe with.

> Made for the moments when AirDrop ain’t working.
tested on kali linux..can also work on windows

