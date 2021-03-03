module.exports = function(app) {
    const user = require('../controllers/gradeController');

    //create user
    app.route('/users').post(user.createUser);

    //get user
    app.route('/marks').get(user.getUser);

    //get max user
    app.route('/marks/max').get(user.getMaxUser);
}
