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

module.exports = { isTokenSet };
