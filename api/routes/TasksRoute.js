module.exports = function(app) {
    const task = require('../controllers/TasksController');

    //create Task
    app.route('/task').post(task.createTask);

    //get all
    app.route('/task').get(task.getAllTask);
}
