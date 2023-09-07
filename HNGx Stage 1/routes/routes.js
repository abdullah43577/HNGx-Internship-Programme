const { Router } = require('express');
const apiController = require('../controllers/apiController');

const router = Router();

router.get('/api/data', apiController.getSlackUser);

module.exports = router;
