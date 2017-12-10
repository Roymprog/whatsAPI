var express = require('express');
var router = express.Router();

const { isTokenSet, isChatMessage } = require('../lib/validations');
const Message = require('../models/message');

/* Respond to webhooks from API. */
router.post('/in', (req, res, next) => {
  const authorizationToken = req.body.token;
  const message = new Message({
    receiverNumber: 31657594215,
    senderNumber: req.body.contact.uid,
    content: req.body.message.body.text,
    direction: "i",
    contentType: req.body.message.type,
    acknowledgementStatus: req.body.message.ack,
    token: req.body.token,
  });
  console.log('message:', message)
  isTokenSet(message)
  .then(isChatMessage)
  .then(message.save())
  .then((doc) => {
    return res.send(doc);
  }).catch(err => {
    return next(err)}
  );
});

module.exports = router;