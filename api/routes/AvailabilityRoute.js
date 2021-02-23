module.exports = function(app) {
    const availability = require('../controllers/AvailabilityController');

    //create availability
    app.route('/availability').post(availability.createAvailability);

    //get all
    app.route('/availability').get(availability.getAllAvailability);
}
