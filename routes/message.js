var express = require('express');
var router = express.Router();

/* Respond to webhooks from API. */
router.post('/in', (req, res) => {
  console.log(req);
  res.send('Received');
});

module.exports = router;
