import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`

class EmotionButton extends Component {
  render() {
    return (
      <Button>
        {this.props.emotion}
      </Button>
    )
  }
}

export default EmotionButton;
