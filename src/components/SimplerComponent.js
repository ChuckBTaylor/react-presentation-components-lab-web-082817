import React from 'react';

const SimplerComponent = (props) => {
  return (
  <div onClick={props.handleClick}>
    I am just happy
  </div>
  )
}

SimplerComponent.defaultProps = {

}

export default SimplerComponent
