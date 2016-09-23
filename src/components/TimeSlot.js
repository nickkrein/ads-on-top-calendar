import React from 'react';

export default class TimeSlot extends React.Component {
  static propTypes = {
    time: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timeslot">
      	{this.props.time}
      </div>
    );
  }
}
