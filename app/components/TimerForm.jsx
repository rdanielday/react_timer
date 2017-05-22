const React = require('react');

const TimerForm = React.createClass({
  onClick(e) {
    e.preventDefault();
    this.props.onStartTimer();
  },
  render() {
    return (
      <div>
      <button className="button expanded" onClick={this.onClick}>Start</button>
      </div>
    );
  },
});

module.exports = TimerForm;
