const router = require('express').Router();
const { getAll, create, update, delete: deleteProduct } = require('../controllers/product');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// Public route
router.get('/', getAll);

// Admin-only routes
router.post('/', verifyToken, verifyAdmin, create);
router.put('/:id', verifyToken, verifyAdmin, update);
router.delete('/:id', verifyToken, verifyAdmin, deleteProduct);

module.exports = router;
