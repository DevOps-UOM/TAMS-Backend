module.exports = function(app) {
    const user = require('../controllers/gradeController');

    //create user
    app.route('/users').post(user.createUser);

    //get ca agent
    app.route('/ca-agents').get(user.getCAagent);

    //get ta agent
    app.route('/ta-agents').get(user.getTAagent);

    app.route('/users/:id').get(user.findOne);

    //app.route('/users/:id').get(user.updateAUser);

    app.route('/abc/:id').get(user.getAgentLeaveStatusById)

    app.route('/users/:id').delete(user.deleteAnAgent);

}