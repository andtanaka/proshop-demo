import asyncHandler from '../middleware/async-Handler.js';
import Product from '../models/productModel.js';

// @desc Fetch all products           //descrição
// @route GET /api/products           //rota
// @access Public                     //acesso (Public, Private, Admin)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch a product by id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getProducts, getProductById };
