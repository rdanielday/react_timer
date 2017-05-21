const React = require('react');

const { Link, IndexLink } = require('react-router');

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">
              React Timer App
        </li>
        <li>
          <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active">Countdown</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          Built by <a href="http://github.com/rdanielday">Ryan Day</a>
        </li>
      </ul>
    </div>
  </div>
  );

module.exports = Nav;
