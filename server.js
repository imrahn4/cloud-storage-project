const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());

// Serve static files from the F:/ drive
app.use('/images', express.static('F:\\'));

// Serve the list of items from the USB drive
app.get('/api/items', (req, res) => {
  const usbDrivePath = 'F:\\'; // Adjust the path to your USB drive
  fs.readdir(usbDrivePath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(files);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
