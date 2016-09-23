import React, { Component } from 'react';
import TimeSlot from './TimeSlot.js';

export default class Schedule extends Component {
  static propTypes = {

  };

  static defaultProps = {
  	timeRange: [
  		'04:00 AM', '05:00AM','06:00AM','07:00AM','08:00AM','09:00AM',
  		'10:00AM','11:00AM','12:00PM','13:00PM','14:00PM','15:00PM',
  		'16:00PM','17:00PM','18:00PM','19:00PM','20:00PM','21:00PM'
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
