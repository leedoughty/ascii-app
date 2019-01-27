import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 40px;
  &:hover {
    cursor: pointer;
  }
`

class AboutButton extends Component {
  render() {
    return (
      <Button>
        about
      </Button>
    )
  }
}

export default AboutButton;
