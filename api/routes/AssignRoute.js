module.exports = function(app) {
    const assign = require('../controllers/AssignController');

    //create availability
    app.route('/assign').post(assign.createAssign);

    //get all
    app.route('/assign').get(assign.getAllAssign);
}
