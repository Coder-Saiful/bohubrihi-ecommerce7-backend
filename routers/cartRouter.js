const router = require('express').Router();
const { createCartItem, deleteCartItem, getCartItem, updateCartItem } = require('../controllers/cartController');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post(authorize, createCartItem)
    .get(authorize, getCartItem)
    .put(authorize, deleteCartItem);

router.route('/:id')
    .delete(authorize, deleteCartItem);

module.exports = router;