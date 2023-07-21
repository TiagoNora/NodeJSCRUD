const Product = require('../model/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};

const showProduct = async (req, res) => {
    try {
        let idQuery = req.query.id;
        const product = await Product.find({id:idQuery});
        if (product.length){
            return res.json(product);
        }
        else{
            const message = "Error fetching data"
            return res.status(404).send({ error: 'The product with the given id doesn´t exists'})
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.json(product);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};

const updateProduct = async (req, res) => {
    try {
        let idQuery = req.query.id;
        const product = await Product.updateOne({id:idQuery},req.body);
        return res.json(product);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};

const deleteProduct = async (req, res) => {
    try {
        let idQuery = req.query.id;
        const product = await Product.deleteOne({id:idQuery});
        return res.json(product);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};


module.exports = {getAllProducts,showProduct,createProduct,updateProduct,deleteProduct}