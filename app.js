var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configuring mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventdb');

// creating schema
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title:String,
    location:String,
    startdate:String,
    enddate:String
  }
);



var event = {
  title:'Sample Title',
  location:'Sample Location',
  startDate:'Sample Date',
  endDate:'Sample Date'
};
// configuring body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configuring view engine
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render('landing');
});

app.get("/add", function(req, res) {
  res.render('ajax',{title:'Add'});
});

app.post("/", function(req, res) {
  event.title = req.body.txtEventTitle;
  event.location = req.body.txtEventLocation;
  event.startDate = req.body.txtEventStartDate;
  event.endDate = req.body.txtEventEndDate;
  
  res.render('commonProcess',{data:event});
});

app.get("/edit", function(req, res) {
  res.render('ajax',{title:'Edit'});
});

app.get("/delete", function(req, res) {
  res.render('ajax',{title:'Delete'});
});

app.get("/view", function(req, res) {
  res.render('ajax',{title:'View'});
});

app.listen(8080);