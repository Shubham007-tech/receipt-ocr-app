
const express = require('express');
const app = express();
const path = require('path');
const receiptRoutes = require('./src/routes/receiptRoutes');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', receiptRoutes);

app.get('/', (req, res) => {
  res.send('Receipt OCR Api is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
