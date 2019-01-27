import React, { Component } from 'react';
import styled from 'styled-components';
import EmotionButton from './EmotionButton';
import AboutButton from './AboutButton';

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60px;
  padding-left: 30px;
  position: absolute;
`

class Navigation extends Component {
  render() {
    return (
      <NavBar>
        <EmotionButton emotion='happy'/>
        <EmotionButton emotion='sad'/>
        <EmotionButton emotion='neutral'/>
        <EmotionButton emotion='angry'/>
        <EmotionButton emotion='suprised'/>
        <AboutButton/>
      </NavBar>
    )
  }
}

export default Navigation;
