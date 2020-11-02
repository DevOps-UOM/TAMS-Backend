module.exports = function(app) {
    var customers = require('../controllers/CustomerController');

    //get all
    app.route('/customers').get(customers.listAllCustomers);

    //create new
    app.route('/customers').post(customers.addACustomer);

    //get single Itinerary
    app.route('/customers/:id').get(customers.getASingleCustomer);

    //edit Itinerary
    app.route('/customers/:id').put(customers.updateACustomer);

    //delete Itinerary
    app.route('/customers/:id').delete(customers.deleteACustomer);

    //get Customers belongs to a single itinerary
    app.route('/customers/itinerary_customers').get(customers.getItineraryCustomers)

}