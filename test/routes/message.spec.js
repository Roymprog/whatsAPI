const assert = require('chai').assert;

const { isTokenSet } = require('../../lib/validations');

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
