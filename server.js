const flash = require('connect-flash');
const methodOverride = require('method-override');
const express = require("express");
const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const path = require("path");

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
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// -------------------------------------------- flash middleware
app.use(flash());

// -------------------------------------------- express-session middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//Global variables
app.use(function(req,res,next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; //send me user or null
    next();
});

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
