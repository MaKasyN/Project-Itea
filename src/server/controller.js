function controller(handler, paramsFunc) {
    return (req, res, next) => {
        new Promise((resolve) => {
            let params = paramsFunc(req, res);
            resolve(handler(params));
        }).catch(err => next(err));
    }
}

module.exports = controller;