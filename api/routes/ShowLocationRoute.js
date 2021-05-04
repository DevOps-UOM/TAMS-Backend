

module.exports = function(app) {
    var enableLocation = require('../controllers/EnableLocationController');

    //get all
    app.route('/enableLocation').post(enableLocation.enableShowLocation);
    app.route('/checkValidity/:random_key').get(enableLocation.validateRequest);


}