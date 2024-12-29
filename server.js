const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/') // This path is relative to the server's root directory.
    },
    filename: function(req, file, cb) {
        // Create a unique filename for the uploaded file
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

// Serve static files located in the 'Public' directory
app.use(express.static('Public'));

// Endpoint to handle file uploads. 'files' matches the name attribute in your form.
app.post('/upload', upload.array('files'), (req, res) => {
    res.send(`
        Files uploaded successfully.<br><br>
        <a href="/">Go back to home</a>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
