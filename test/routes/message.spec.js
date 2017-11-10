const assert = require('chai').assert;

const { isTokenSet } = require('/home/fd99od/personal_web_projects/whatsAPI/routes/message.js');

describe('Messages', () => {
    describe('incoming: ', () => {
        it('should return false when wrong token is set', () => {
            assert.isFalse(isTokenSet('a'));
        });
        it('should return true when wrong token is set', () => {
            assert.isTrue(isTokenSet('abcd1234'));
        });
    });
});
