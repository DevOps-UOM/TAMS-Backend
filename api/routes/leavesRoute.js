module.exports = function(app) {
    const leaves = require('../controllers/leavesController');

    //create leaves
    app.route('/leaves').post(leaves.createleaves);

    //get all
    app.route('/leaves').get(leaves.getAllleaves);
}
