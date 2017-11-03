import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleComponent extends Component{

  state = {
    mood: 'happy'
  }


  handleClick = (ev) => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    console.log(newMood);
    this.setState({mood: newMood})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

SimpleComponent.defaultProps = {

}

SimpleComponent.propTypes = {

}

export default SimpleComponent;
