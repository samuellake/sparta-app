var express = require('express');
var router = express.Router();
var item = require("../controllers/ItemController.js");

// Get all items on list
router.get('/', (req, res) => {
  item.list(req, res);
});

// Add item
router.post('/add', (req, res) => {
  item.add(req, res);
});

// Remove item
router.get('/delete/:id', (req, res, next) => {
  item.delete(req, res);
});

module.exports = router;
