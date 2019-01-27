import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  font-size: 1.5em;
  font-family: open sans;
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1>{this.props.title}</h1>
      </HeaderContainer>
    )
  }
}

export default Header;
