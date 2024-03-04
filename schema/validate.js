exports.validate = (validator) => (req, res, next) => {
    console.log(req.body);
    validator.validateAsync(req.body)
        .then(() => {
            next();
        })
        .catch(err => {
            res.status(400).json({ success: false, errorMessage: err.message });
        });
}
