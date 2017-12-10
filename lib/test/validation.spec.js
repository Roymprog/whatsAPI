const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const assert = chai.assert;

const { isTokenSet, isChatMessage } = require('../validations');

describe('Validations: ', () => {
    it('should be rejected when wrong token is set', () => {
        return assert.isRejected(isTokenSet('a'));
    });
    it('should be rejected when token is not set', () => {
        return assert.isRejected(isTokenSet(undefined));
    });
    it('should be rejected when token is null', () => {
        return assert.isRejected(isTokenSet(null));
    });
    it('should return true when wrong token is set', () => {
        return assert.isFulfilled(isTokenSet('abcd1234'));
    });

    it('should be rejected when wrong token is set', () => {
        return assert.isRejected(isChatMessage('image'));
    });
    it('should be rejected when token is not set', () => {
        return assert.isRejected(isChatMessage(undefined));
    });
    it('should be rejected when token is null', () => {
        return assert.isRejected(isChatMessage(null));
    });
    it('should return true when wrong token is set', () => {
        return assert.isFulfilled(isChatMessage('chat'));
    });
});
