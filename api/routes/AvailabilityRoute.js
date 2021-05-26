module.exports = function(app) {
    const availability = require('../controllers/AvailabilityController');

    //create availability
    app.route('/availability').post(availability.createAvailability);

    //get all
    app.route('/availability').get(availability.getAllAvailability);

    //update Availability
    app.route('/availability/:id').put(availability.editAvailability)

    //delete Availability
    app.route('/availability/:date/:custid').delete(availability.deleteAvailability)

}
