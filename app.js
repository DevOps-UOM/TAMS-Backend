require('./api/config/config');
require('./api/config/passportConfig');
require('./api/shared/user.service');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const uri = "mongodb+srv://dbAdmin:LGPxREeweWiVjnPM@clustertams.ovlfe.mongodb.net/TRAVELING-AGENTS-MANAGEMENT-SYSTEM?retryWrites=true&w=majority";

const rtsIndex = require('./api/routes/IndexRoute');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);


app.use(cors());

// app.use(rtsIndex);

app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


var port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));

var Itinerary = require('./api/models/ItineraryModel');
var Customer = require('./api/models/CustomerModel');
var Availability = require('./api/models/AvailabilityModel');
var leaves = require('./api/models/leavesModel');
//var Grade = require('./api/models/grade');
var TaskAssignment = require('./api/models/IsAssignToModel');
var Task = require('./api/models/TasksModel');
var User = require('./api/models/UserModel');
var Assign= require('./api/models/AssignModel');
var userService = require('./api/shared/user.service');


mongoose.Promise = global.Promise;

const schedule = require('node-schedule');

const job = schedule.scheduleJob('*/1 * * * *', function(){
    // userService.getAgentLeaveStatusById("TA002")
    // console.log('The answer to life, the universe, and everything!');
});

const connectDB = async() => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("db connected");
}
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routeItinerary = require('./api/routes/ItineraryRoute');
var routeCustomer = require('./api/routes/CustomerRoute');
var routeAvailability = require('./api/routes/AvailabilityRoute');
var routeleaves = require('./api/routes/leavesRoute');
var userRoutes = require('./api/routes/UserRoutes');
var routeTaskAssignment = require('./api/routes/IsAssignToRoute')
var routeTask = require('./api/routes/TasksRoute');
var routeAssign= require('./api/routes/AssignRoute')


routeItinerary(app);
routeCustomer(app);
routeAvailability(app);
routeleaves(app);
userRoutes(app);
routeTaskAssignment(app);
routeTask(app);
routeAssign(app);
app.use(rtsIndex);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found!' });
});


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.listen(port);

// app.listen(port, '0.0.0.0', function() {
//         console.log("Node app is running at localhost:" + app.get('port'));
//     })
console.log("TAMS Restful API server started on :" + port);


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAdmin:LGPxREeweWiVjnPM@clustertams.ovlfe.mongodb.net/TRAVELING-AGENTS-MANAGEMENT-SYSTEM?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
