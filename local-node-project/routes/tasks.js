const router = require('Express').Router();
const { get, getById, create } = require('.././controllers/taskController.js');

router.get('/', get);
router.post('/', create);
router.get('/:id', getById);

module.exports = router;
