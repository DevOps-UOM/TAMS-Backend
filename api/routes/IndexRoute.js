const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/UserController');
const jwtHelper = require('../config/jwtHelper');


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userprofile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/resetpassword', jwtHelper.verifyJwtToken, ctrlUser.resetPassword);

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