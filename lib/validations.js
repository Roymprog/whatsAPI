isTokenSet = (token) => new Promise((resolve, reject) => {
    if (token === 'abcd1234') {
        resolve();
    } else {
        const err = new Error('You do not have the rights to do this!');
        err.code = 'E_UNAUTHORIZED'
        err.httpStatusCode = 403;
        reject(err);
    };
})

isTextMessage = (messageType) => new Promise ((resolve, reject) => {
    if (messageType === 'chat') {
        resolve();
    } else {
        const err = new Error('You do not have the rights to do this!');
        err.code = 'E_NOTALLOWED'
        err.httpStatusCode = 405;
        reject(err);
    }
})

module.exports = { isTokenSet };
