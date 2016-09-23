import React, { Component } from 'react';

export default class Calendar extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	const { calendar } = this.refs
    const $calendar = $(calendar);

  	$calendar.fullCalendar({
  		header: {
  			left: 'prev, next, today',
  			center: 'title',
        right: 'month agendaDay'
  		},
      views: {
        agenda: {
        allDaySlot: false,
        slotDuration: '01:00:00',
        minTime: '04:00:00',
        maxTime: '22:00:00'
        }
      },
      fixedWeekCount: false,
      dayClick: function(date, jsEvent, view) {
        $calendar.fullCalendar('changeView', 'agendaDay');
        $calendar.fullCalendar('gotoDate', date);
      } 
  	});
  }



  render() {
    return (
      <div ref="calendar"></div>
    );
  }
}
