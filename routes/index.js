const express = require('express');
const router = express.Router();

router.get('/superMiddleware', (req, res, next) => {
  console.log('hello user');
  next();
});

module.exports = router;
