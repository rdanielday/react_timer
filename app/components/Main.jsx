const React = require('react');
const Nav = require('Nav');

const Main = props => (
  <div>
    <Nav />
    <div className="row">
      <div className="column small-centered medium-6 large-4">
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  </div>
  );

module.exports = Main;
