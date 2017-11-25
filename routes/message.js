var express = require('express');
var router = express.Router();

const { isTokenSet, isTextMessage } = require('../lib/validations');
const Message = require('../models/message');

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  const message = new Message({
    receiverNumber: 31657594215,
    senderNumber: req.body.uid,
    text: req.body.message.body.type,
    direction: "incoming",
    type: req.body.message.type,
    acknowledgementStatus: req.body.ack,
  });
  console.log('message:', message)
  isTokenSet(message.token)
  .then(isTextMessage)
  .then((message) => {
    
    return res.send('Received');
  }).catch(err => {
    return next(err)}
  );
});

module.exports = router;