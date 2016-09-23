import React, { Component } from 'react';
import Calendar from './components/Calendar.js';
import Schedule from './components/Schedule.js';
import UserImage from './components/UserImage.js';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



class App extends Component {
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
	      		<UserImage />
	      </div>
      	<Schedule />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
