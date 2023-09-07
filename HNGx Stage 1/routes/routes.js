const { Router } = require('express');
const apiController = require('../controllers/apiController');

const router = Router();

router.get('/api/:slack_name/:track', apiController.getSlackUser);

module.exports = router;
