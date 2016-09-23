import React, { Component } from 'react';
import TimeSlot from './TimeSlot.js';

export default class Schedule extends Component {
  static propTypes = {

  };

  static defaultProps = {
  	timeRange: [
  		'04:00 AM', '05:00AM','06:00AM','07:00AM','08:00AM','09:00AM',
  		'10:00AM','11:00AM','12:00PM','01:00PM','02:00PM','03:00PM',
  		'04:00PM','05:00PM','06:00PM','07:00PM','08:00PM','09:00PM'
  		],
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="schedule">
				<div className="wrapper">
	    		{this.props.timeRange.map((time, index) => {
	    			return <TimeSlot key={index} time={time} />
	    		})}
	    	</div>
    	</div>
    );
  }
}
