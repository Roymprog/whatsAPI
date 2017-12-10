const isTokenSet = message => new Promise((resolve, reject) => {
    const token = message.token;
    if (token === 'abcd1234') {
        return resolve(message);
    } else {
        const err = new Error('You do not have the rights to do this!');
        err.code = 'E_UNAUTHORIZED'
        err.httpStatusCode = 403;
        return reject(err);
    };
})

const isChatMessage = message => new Promise ((resolve, reject) => {
    const messageType = message.contentType;
    if (messageType === 'chat') {
        return resolve(message);
    } else {
        const err = new Error('Only text messages are allowed!');
        err.code = 'E_NOTALLOWED'
        err.httpStatusCode = 405;
        return reject(err);
    }
})

module.exports = { isTokenSet, isChatMessage };
