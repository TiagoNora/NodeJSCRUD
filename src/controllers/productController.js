const getAll = (req, res, next) => {
    res.json({message: "Get all products"});
};

module.exports = {getAll};