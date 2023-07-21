const getAllProducts = (req, res) => {
    res.json({message: "Get all products"});
};

const showProduct = (req, res) => {
    res.json({message: "Get a product"});
};

const createProduct = (req, res) => {
    res.json({message: "Create a product"});
};

const updateProduct = (req, res) => {
    res.json({message: "Update a product"});
};

const deleteProduct = (req, res) => {
    res.json({message: "Delete a product"});
};


module.exports = {getAllProducts,showProduct,createProduct,updateProduct,deleteProduct}