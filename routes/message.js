var express = require('express');
var router = express.Router();

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  if (req.token !== 'abcd1234') {
    const err = new Error('You do not have the rights to do this!');
    error.code = 'E_UNAUTHORIZED'
    err.httpStatusCode = 403;
    console.log(err);
    return next(err);
  }
  console.log(req.body);
  return res.send('Received');
});

module.exports = router;
