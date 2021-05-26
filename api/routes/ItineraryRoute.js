module.exports = function(app) {
    var itineraries = require('../controllers/ItineraryController');

    //get all
    app.route('/itineraries').get(itineraries.listAllItineraries);

    //create new
    app.route('/itineraries').post(itineraries.addAItinerary);

    //get by date
    app.route('/itineraries/:date').get(itineraries.listItinerariesByDate);

    //get single Itinerary
    app.route('/itineraries/:date/:taid').get(itineraries.getASingleItinerary);

    //edit Itinerary
    app.route('/itineraries/:date/:taid').put(itineraries.updateAItinerary);

    //delete Itinerary
    app.route('/itineraries/:date/:taid').delete(itineraries.deleteAItinerary);


    app.route('/itineraries/allocated_customers/:date/:taid').get(itineraries.getAllocatedCustomers);
    

    app.route('/itineraries/allocated_pending_customers/:date/:taid').get(itineraries.getAllocatedPendingCustomers);
}