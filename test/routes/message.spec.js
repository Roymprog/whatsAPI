const assert = require('chai').assert;

const {isTokenSet} = require('/home/fd99od/personal_web_projects/whatsAPI/routes/message.js');

assert.isFalse(isTokenSet('a'));