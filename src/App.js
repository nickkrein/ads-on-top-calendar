import React from 'react';
import Calendar from './components/Calendar.js';
import Schedule from './components/Schedule.js';

import './styles/main.scss'

export default class App extends React.Component {
  static propTypes = {

  };

  state = {
  	selectedDay: new Date(),
  }

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentDidMount() {
  	console.log(this.state.selectedDay)
  }

  componentDidUpdate() {
  	console.log(this.state.selectedDay)
  }

  handleDayClick(e, day, { selected }) {
  	this.setState({
      selectedDay : selected ? null : day, 
    });
  }


  render() {
    return (
      <div className="app">
	      <div className="top-container">
	      		<Calendar selectedDay={this.state.selectedDay} handleDayClick={this.handleDayClick} />
	      		<img src="http://img00.deviantart.net/35aa/i/2014/284/a/4/final_fantasy_7_cloud_sprite_wallart_by_gemogo-d80m5k4.jpg" width="100px" height="100px" />
	      </div>
      	<Schedule />
      </div>
    );
  }
}
