import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import UserImage from './UserImage.js';

const ItemTypes = {
  USERIMAGE: 'userImage'
};

const dropTarget = {
  drop(props, monitor, component) {
  	return {};
  }
};

function collect(connect, monitor) {
	if (monitor.getItem()) console.log(monitor.getItem());
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class TimeSlot extends Component {
  static propTypes = {
    time: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const { connectDropTarget, isOver } = this.props;
    return connectDropTarget (
      <div className="timeslot" >
      	{this.props.time}
      	{ isOver ? <UserImage /> : false }
      </div>
    );
  }
}

export default DropTarget(ItemTypes.USERIMAGE, dropTarget, collect)(TimeSlot);
