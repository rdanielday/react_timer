const React = require('react');
const Clock = require('Clock');
const TimerForm = require('TimerForm');
const Controls = require('Controls');

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped',
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
      }
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount,
      });
    }, 1000);
  },
  handleStartTimer() {
    this.setState({
      timerStatus: 'started',
    });
  },
  handleStatusChange(newStatus) {
    this.setState({ timerStatus: newStatus });
  },
  render() {
    const { timerStatus, count } = this.state;
    const renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return (
          <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}
          />
        );
      }
      return <TimerForm onStartTimer={this.handleStartTimer} />;
    };
    return (
      <div>
      <h1 className="page-title">Timer App</h1>
      <Clock totalSeconds={count} />
      {renderControlArea()}
      </div>
    );
  },
});

module.exports = Timer;
