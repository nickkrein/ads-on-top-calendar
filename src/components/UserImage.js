import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  USERIMAGE: 'userImage'
};

const userImageSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class UserImage extends Component {
  static PropTypes = {
    connectDragSource: PropTypes.func.isRequired,
  	isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const { connectDragSource, isDragging } = this.props;
    return connectDragSource (
      <img src="http://img00.deviantart.net/35aa/i/2014/284/a/4/final_fantasy_7_cloud_sprite_wallart_by_gemogo-d80m5k4.jpg" height="100px" width="100px" />
    );
  }
}

export default DragSource(ItemTypes.USERIMAGE, userImageSource, collect)(UserImage);
