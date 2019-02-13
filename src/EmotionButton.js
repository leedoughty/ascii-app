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
      <Button onClick={() => this.props.onClick(this.props.emotion)}>
        {this.props.emotion}
      </Button>
    )
  }
}

export default EmotionButton;
