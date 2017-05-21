const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

const {
    Route,
    Router,
    IndexRoute,
    hashHistory,
    } = require('react-router');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app'),
  );
