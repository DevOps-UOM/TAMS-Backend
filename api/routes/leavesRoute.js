

module.exports = function(app) {
    const leaves = require('../controllers/leavesController');
    // const authorize = require('../shared/authorize');
    // const Role = require('../shared/role');
    // const ctrlUser = require('../controllers/UserController');

    //create leaves
    app.route('/leaves').post(leaves.createleaves);

    //get all
    app.route('/leaves').get(leaves.getAllleaves);

}
