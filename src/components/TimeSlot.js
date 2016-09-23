import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const ItemTypes = {
  USERIMAGE: 'userImage'
};

const dropTarget = {
  drop(props, monitor, component) {
  	component.setState({
  		test: '111'
  	});
  	return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
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
      </div>
    );
  }
}

export default DropTarget(ItemTypes.USERIMAGE, dropTarget, collect)(TimeSlot);
