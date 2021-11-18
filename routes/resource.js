var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var job_controller = require('../controllers/job'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// job ROUTES /// 
 
// POST request for creating a job.  
router.post('/jobs', job_controller.job_create_post); 
 
// DELETE request to delete job. 
router.delete('/jobs/:id', job_controller.job_delete); 
 
// PUT request to update job. 
router.put('/jobs/:id', 
job_controller.job_update_put); 
 
// GET request for one job. 
router.get('/jobs/:id', job_controller.job_detail); 
 
// GET request for list of all job items. 
router.get('/jobs', job_controller.job_list); 

// GET request for one job.
router.get('/job/:id', job_controller.job_detail);

module.exports = router; 

