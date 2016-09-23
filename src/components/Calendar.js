import React, { Component } from 'react';
import DatePicker, { DateUtils } from 'react-day-picker'; 

export default class Calendar extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }

  handleClick = (e, day, {selected}) => {
    this.props.handleDayClick(e, day, {selected});
  }

  render() {
    const {selectedDay} = this.props;
    return (
      <div className="calendar">
        <DatePicker 
          onDayClick={ this.handleClick }
          selectedDays={ day => DateUtils.isSameDay(day, this.props.selectedDay) }
        />
      </div>
    );
  }
}
