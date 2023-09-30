const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/api', controller.api_welcome_get);
router.post('/api/upload', controller.api_save_recording_post);
router.get('/api/getrecordings', controller.api_get_all_recordings);
router.get('/api/:id', controller.api_get_single_recording);
router.put('/api/:id', controller.api_update_recording_title);

module.exports = router;
