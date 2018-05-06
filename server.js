var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const exphbs = require('express-handlebars');

var app = express();

// Routes
const api       = require('./routes/api-routes');
const shopping  = require('./routes/html-routes');
const admin     = require('./routes/admin-routes');

// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  ************** MIDDLEWARES ****************
// --------------------------------------------Handle-bars middleware
app.engine('handlebars',
    exphbs({defaultLayout: 'main'})
);
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use route
app.use('/', shopping);
app.use('/api', api);
app.use('/admin', admin);


var PORT = process.env.PORT || 8080;
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
