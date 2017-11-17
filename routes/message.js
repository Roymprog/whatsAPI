var express = require('express');
var router = express.Router();

const { isTokenSet } = require('../lib/validations');

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  isTokenSet(req.body.token).then(() => {
    return res.send('Received');
  }).catch(err => 
    next(err)
  );
});

module.exports = router;