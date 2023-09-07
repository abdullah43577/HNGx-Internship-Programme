const { Router } = require('express');
const apiController = require('../controllers/apiController');

const router = Router();

router.get('/api', apiController.getSlackUser);

module.exports = router;
