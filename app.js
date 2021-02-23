var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const uri = "mongodb+srv://dbAdmin:LGPxREeweWiVjnPM@clustertams.ovlfe.mongodb.net/TRAVELING-AGENTS-MANAGEMENT-SYSTEM?retryWrites=true&w=majority";

var app = express();

app.use(cors());

var port = process.env.PORT || 3000;

var Itinerary = require('./api/models/ItineraryModel');
var Customer = require('./api/models/CustomerModel');
var Availability = require('./api/models/AvailabilityModel');
var leaves = require('./api/models/leavesModel');

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

routeItinerary(app);
routeCustomer(app);
routeAvailability(app);
routeleaves(app);


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