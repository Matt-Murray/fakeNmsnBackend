// server.js
const express = require('express');
const app = express();
const path = require('path');

// app.use(forceSSL());

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/NmsnrespRetrievalService', function(req, res) {
  
});

app.get('/NmsnreferRetrievalService', function(req, res) {
    
});

app.post('/NmsnrespSubmissionService', function(req, res) {

});

app.put('/NmsnrespUpdateService', function(req, res) {

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);