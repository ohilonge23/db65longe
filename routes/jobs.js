var express = require('express');
const job_controller = require('../controllers/job');
var router = express.Router();

/* GET home page. */
router.get('/', job_controller.job_view_all_Page);

module.exports = router;
