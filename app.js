var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
//const http = require('http');
//const path = require('path');
const uri = "mongodb+srv://dbAdmin:LGPxREeweWiVjnPM@clustertams.ovlfe.mongodb.net/TRAVELING-AGENTS-MANAGEMENT-SYSTEM?retryWrites=true&w=majority";

var app = express();

app.use(cors());


const PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'public')));

var Itinerary = require('./api/models/ItineraryModel');
var Customer = require('./api/models/CustomerModel');
var Availability = require('./api/models/AvailabilityModel');
var leaves = require('./api/models/leavesModel');
var Grade = require('./api/models/grade');
var TaskAssignment = require('./api/models/IsAssignToModel');
var Task = require('./api/models/TasksModel');


mongoose.Promise = global.Promise;

const connectDB = async() => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("db connected");
}
connectDB();



// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

// app.use(requireHTTPS);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send("hello and welcome");

});

var routeItinerary = require('./api/routes/ItineraryRoute');
var routeCustomer = require('./api/routes/CustomerRoute');
var routeAvailability = require('./api/routes/AvailabilityRoute');
var routeleaves = require('./api/routes/leavesRoute');
var userRoutes = require('./api/routes/UserRoutes');
var routeTaskAssignment = require('./api/routes/IsAssignToRoute')
var routeTask = require('./api/routes/TasksRoute');


routeItinerary(app);
routeCustomer(app);
routeAvailability(app);
routeleaves(app);
userRoutes(app);
routeTaskAssignment(app);
routeTask(app);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found!' });
});


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.listen(PORT, () => {
    console.log("TAMS Restful API server started on :" + PORT);
});

// app.listen(port, '0.0.0.0', function() {
//         console.log("Node app is running at localhost:" + app.get('port'));
//     })


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