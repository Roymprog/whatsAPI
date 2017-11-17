var express = require('express');
var router = express.Router();

const { isTokenSet, isTextMessage } = require('../lib/validations');

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  const message = req.body;
  isTokenSet(message.token)
  .then(isTextMessage(message.type))
  .then(() => {
    return res.send('Received');
  }).catch(err => 
    next(err)
  );
});

module.exports = router;