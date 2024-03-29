const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/UserController');
const jwtHelper = require('../config/jwtHelper');
const userService = require('../shared/user.service');
const authorize = require('../shared/authorize');
const Role = require('../shared/role');
const AuthCtrl = require('../controllers/ResetPasswordController');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/stat-dashboard', authorize(Role.Admin), jwtHelper.verifyJwtToken, ctrlUser.getAll);
router.get('/userprofile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/:id', authorize(), ctrlUser.getById);
// router.get('/resetpassword', jwtHelper.verifyJwtToken, ctrlUser.resetPassword);
router.post('/req-reset-password', AuthCtrl.ResetPassword);
router.post('/new-password', AuthCtrl.NewPassword);
router.post('/valid-password-token', AuthCtrl.ValidPasswordToken);


module.exports = router;



// module.exports = function(app) {

//     const express = require('express');
//     const router = express.Router();
//     const ctrlUser = require('../controllers/UserController');
//     const jwtHelper = require('../config/jwtHelper');


//     app.route('/register').post(ctrlUser.register);
//     app.route('/authenticate').post(ctrlUser.authenticate);
//     app.route('/userprofile').get(jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//     app.route('/resetpassword').get(jwtHelper.verifyJwtToken, ctrlUser.resetPassword);
// }