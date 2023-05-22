var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.index);
router.get('/foodSuggestions/:query', indexCtrl.foodSuggestions);
router.post('/filter', indexCtrl.filter)
router.post('/reset', indexCtrl.resetFilter)
// router.get('/test', indexCtrl.test);

module.exports = router;