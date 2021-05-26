module.exports = function(app) {
    var agents = require('../controllers/StatDashboardController');

    //get all
    app.route('/best-agents').get(agents.listAllAgents);

    // //create new
    // app.route('/customers').post(customers.addACustomer);

    // //get single Itinerary
    // app.route('/customers/:id').get(customers.getASingleCustomer);

    // //edit Itinerary
    // app.route('/customers/:id').put(customers.updateACustomer);

    // //delete Itinerary
    // app.route('/customers/:id').delete(customers.deleteACustomer);

}