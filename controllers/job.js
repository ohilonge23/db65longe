var job = require('../models/job'); 
 
// List of all jobs 
exports.job_list = async function(req, res) { 
    try{ 
        theJobs = await job.find(); 
        res.send(theJobs); 
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
    document.name = req.body.name; 
    document.YrsOfExp = req.body.YrsOfExp; 
    document.broadcastChannel = req.body.broadcastChannel; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 

// Handle job update form on PUT.
exports.job_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await job.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)
 toUpdate.name = req.body.name;
 if(req.body.YrsOfExp) toUpdate.YrsOfExp = req.body.YrsOfExp;
 if(req.body.broadcastChannel) toUpdate.broadcastChannel = req.body.broadcastChannel;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle job delete on DELETE.
exports.job_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await job.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   }; 
 
// Handle a show one view with id specified by query
exports.job_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await job.findById( req.query.id)
    res.render('jobdetail',
   { title: 'job Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a job.
// No body, no in path parameter, no query.
// Does not need to be async
exports.job_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jobcreate', { title: 'job Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a job.
// query provides the id
exports.job_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await job.findById(req.query.id)
    res.render('jobupdate', { title: 'job Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.job_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await job.findById(req.query.id)
    res.render('jobdelete', { title: 'job Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};