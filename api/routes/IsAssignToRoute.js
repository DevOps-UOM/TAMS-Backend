module.exports = function(app) {
    var taskAssignment = require('../controllers/IsAssignToController');

    //get all
    app.route('/taskAssignment').get(taskAssignment.listAllTaskAssignments);

    //create new
    app.route('/taskAssignment').post(taskAssignment.addATaskAssignment);

    //get Single record
    app.route('/taskAssignment/:itinerary_id/:cust_id').get(taskAssignment.getASingleTaskAssignment);

    //edit Itinerary
    app.route('/taskAssignment/:itinerary_id/:cust_id').put(taskAssignment.updateTaskAssignment);

    //delete Itinerary
    //app.route('/taskAssignment/:itinerary_id/:cust_id').put(taskAssignment.removeATaskAssignment);


}