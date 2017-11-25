class Message {
  constructor({ receiverNumber, senderNumber, text, direction, type }) {
    this.receiverNumber = receiverNumber;
    this.senderNumber = senderNumber;
    this.text = text;
    this.direction = direction;
  }
}

module.exports = { Message }