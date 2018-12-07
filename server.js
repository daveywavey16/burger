var express = require('express');

var bodyParser = require('body-parser');

var methodOverride = require('method-override')

var exphbs = require('express-handlebars');


var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 8080;
// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/",routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
