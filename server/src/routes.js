const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');

router.use(express.json())

router.get('/usuario', userController.buscarUsuarios);
router.get('/usuario_unit/:email', userController.buscarUm);
router.post('/usuario_unit', userController.inserir);

module.exports = router;