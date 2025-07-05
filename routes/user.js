const express = require('express');
const router = express.Router();
const registerController = require('../controllers/RegisterController');
const editController = require('../controllers/EditController');

router.post('/register', registerController.register);
router.get('/', registerController.index);
router.get('/edit/:id', editController.show);
router.put('/edit/:id', editController.edit);

module.exports = router;