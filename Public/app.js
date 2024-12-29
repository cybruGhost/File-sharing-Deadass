const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Define storage for the files
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
const upload = multer({ storage: storage });

// Serve static files from 'public' folder
app.use(express.static('public'));

// Handle file uploads
app.post('/upload', upload.array('files'), (req, res) => {
    res.send('Files uploaded successfully.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
