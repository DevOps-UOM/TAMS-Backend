require('./api/config/config');
require('./api/config/passportConfig');

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

app.use(rtsIndex);

app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


var port = process.env.PORT || 3000;

var Itinerary = require('./api/models/ItineraryModel');
var Customer = require('./api/models/CustomerModel');
var Availability = require('./api/models/AvailabilityModel');
var leaves = require('./api/models/leavesModel');
var Grade = require('./api/models/grade');
var User = require('./api/models/UserModel');
mongoose.Promise = global.Promise;

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
// var IndexRoutes = require('./api/routes/IndexRoute');

routeItinerary(app);
routeCustomer(app);
routeAvailability(app);
routeleaves(app);
userRoutes(app);
app.use(rtsIndex);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found!' });
});

app.listen(port);

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