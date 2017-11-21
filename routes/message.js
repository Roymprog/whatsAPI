var express = require('express');
var router = express.Router();

const { isTokenSet, isTextMessage } = require('../lib/validations');

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  const message = req.body;
  isTokenSet(message.token)
  .then(isTextMessage)
  .then((message) => {
    return res.send('Received');
  }).catch(err => {
    return next(err)}
  );
});

module.exports = router;