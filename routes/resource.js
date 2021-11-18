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
router.delete('/resource/jobs/:id', job_controller.job_delete); 
 
// PUT request to update job. 
router.put('/resource/jobs/:id', 
job_controller.job_update_put); 
 
// GET request for one job. 
router.get('/resource/jobs/:id', job_controller.job_detail); 
 
// GET request for list of all job items. 
router.get('/jobs', job_controller.job_list); 

// GET request for one job.
router.get('/job/:id', costume_controller.costume_detail);

// for a specific job.
exports.job_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Costume.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

module.exports = router; 

