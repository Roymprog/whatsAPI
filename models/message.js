const {mongoose} = require('../db/mongoose');

const Message = mongoose.model('Message', {
  receiverNumber: {
    type: Number
  },
  senderNumber: {
    type: Number
  },
  content: {
    type: String
  },
  direction: {
    type: String,
    enum: ['i', 'o' ]
  },
  contentType: {
    type: String,
    enum: ['chat', 'video', 'image', 'audio', 'document', 'vcard', 'location']
  },
  acknowledgementStatus: {
    type: Number,
    enum: [0, 1, 2, 3]
  },
  token: {
    type: String,
  }
});

module.exports = Message;