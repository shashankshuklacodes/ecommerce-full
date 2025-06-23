const router = require('express').Router();
const { get, add, remove } = require('../controllers/cart');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, get);
router.post('/', verifyToken, add);
router.delete('/:productId', verifyToken, remove);

module.exports = router;
