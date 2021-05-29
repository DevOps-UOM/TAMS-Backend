// module.exports = function(app) {
//     var agents = require('../controllers/StatDashboardController');

//     //get all
//     app.route('/best-agents').get(agents.findBestAgents);

//     // //create new
//     // app.route('/customers').post(customers.addACustomer);

//     // //get single Itinerary
//     // app.route('/customers/:id').get(customers.getASingleCustomer);

//     // //edit Itinerary
//     // app.route('/customers/:id').put(customers.updateACustomer);

//     // //delete Itinerary
//     // app.route('/customers/:id').delete(customers.deleteACustomer);
    
// }


module.exports = function(app) {
    var agents = require('../controllers/StatDashboardController');

    //get best agents
    app.route('/best-agents').get(agents.listAllAgents);

    //get best agents
    app.route('/most-visited-customers').get(agents.listMostVisitedCustomers);

    //get efficient days
    app.route('/most-efficient-days').get(agents.listMostEfficientDays);

    //get efficient days
    app.route('/least-efficient-days').get(agents.listLeastEfficientDays);

    //get efficient days
    app.route('/list-daily-task-count').get(agents.listDailyTaskCount);

    //get efficient days
    app.route('/list-monthly-task-count').get(agents.listMonthlyTaskCount);
    
}
