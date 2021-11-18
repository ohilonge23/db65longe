var job = require('../models/job'); 
 
// List of all jobs 
exports.job_list = async function(req, res) { 
    try{ 
        theJobs = await job.find(); 
        res.send(thejobs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.job_view_all_Page = async function(req, res) { 
    try{ 
        thejobs = await job.find(); 
        res.render('jobs', { title: 'Jobs Search Results', results: thejobs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific job. 
// for a specific job.
exports.job_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await job.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Handle televisionShow create on POST. 
exports.job_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new job(); 
    document.ts_name = req.body.ts_name; 
    document.ts_yrs = req.body.ts_yrs; 
    document.ts_broadcastchannel = req.body.ts_broadcastchannel; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// Handle job delete form on DELETE. 
exports.job_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: job delete DELETE ' + req.params.id); 
}; 
 
// Handle job update form on PUT. 
exports.job_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: job update PUT' + req.params.id); 
}; 