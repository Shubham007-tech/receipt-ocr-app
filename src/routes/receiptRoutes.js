
const express = require('express');
const router = express.Router();
const multer = require('multer');
const receiptController = require('../controllers/receiptController');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });



// API routes
router.post('/upload', upload.single('file'), receiptController.uploadReceipt);
router.post('/validate', receiptController.validateReceipt);
router.post('/process', receiptController.processReceipt);
router.get('/receipts', receiptController.getAllReceipts);
router.get('/receipts/:id', receiptController.getReceiptById);

module.exports = router;
