var React    = require("react"),
    ReactDOM = require("react-dom"),
    Main     = require("Main"),
    Timer    = require("Timer"),
    Countdown = require("Countdown");
    
var {
    Route,
    Router,
    IndexRoute,
    hashHistory
    } = require("react-router");

// load Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// app css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById("app")
  );
