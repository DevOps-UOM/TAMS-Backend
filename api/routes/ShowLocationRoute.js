module.exports = function(app) {
    var enableLocation = require('../controllers/EnableLocationController');


    app.route('/enableLocation').post(enableLocation.enableShowLocation);

    app.route('/checkValidity/:random_key').get(enableLocation.validateRequest);

    app.route('/expired').put(enableLocation.expireKey);

    app.route('/isExpired/:ta_id/:cust_id').get(enableLocation.isExpired);

}