module.exports = function(app) {
    const user = require('../controllers/gradeController');

    //create user
    app.route('/users').post(user.createUser);

    //get ca agent
    app.route('/ca-agents').get(user.getUser);

    //get ta agent
    app.route('/ta-agents').get(user.getMaxUser);

    app.route('/users/:id').get(user.findOne);

    app.route('/users/:id').get(user.updateAUser);

    app.route('/abc/:id').get(user.getAgentLeaveStatusById)

}
