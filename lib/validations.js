isTokenSet = (token) => new Promise((resolve, reject) => {
    if (token === 'abcd1234') {
        return resolve(true);
    } else {
        const err = new Error('You do not have the rights to do this!');
        error.code = 'E_UNAUTHORIZED'
        err.httpStatusCode = 403;
        return reject(err);
    };
})

module.exports = { isTokenSet };
