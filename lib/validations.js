const isTokenSet = token => new Promise((resolve, reject) => {
    if (token === 'abcd1234') {
        return resolve();
    } else {
        const err = new Error('You do not have the rights to do this!');
        err.code = 'E_UNAUTHORIZED'
        err.httpStatusCode = 403;
        return reject(err);
    };
})

const isChatMessage = messageType => new Promise ((resolve, reject) => {
    if (messageType === 'chat') {
        return resolve();
    } else {
        const err = new Error('Only text messages are allowed!');
        err.code = 'E_NOTALLOWED'
        err.httpStatusCode = 405;
        return reject(err);
    }
})

module.exports = { isTokenSet, isChatMessage };
