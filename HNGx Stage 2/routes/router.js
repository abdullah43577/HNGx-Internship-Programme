const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/', controller.api_test);
router.post('/api', controller.api_post_create_user);
router.get('/api', controller.api_get_getUserDetails);
router.put('/api', controller.api_put_updateUser);
router.delete('/api', controller.api_delete_deleteUser);

module.exports = router;
