import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  font-size: 1.5em;
  font-family: open sans;
  color: black;
  text-decoration: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:visited, &:link, &:active {
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledLink to="/">
          <h1>{this.props.title}</h1>
        </StyledLink>
      </HeaderContainer>
    )
  }
}

export default Header;
