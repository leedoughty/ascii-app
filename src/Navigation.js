import React, { Component } from 'react';
import styled from 'styled-components';
import EmotionButton from './EmotionButton';
import AboutButton from './AboutButton';
import { Link } from 'react-router-dom';

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
        <EmotionButton onClick={this.props.onClick} emotion='happy'/>
        <EmotionButton onClick={this.props.onClick} emotion='sad'/>
        <EmotionButton onClick={this.props.onClick} emotion='neutral'/>
        <EmotionButton onClick={this.props.onClick} emotion='angry'/>
        <EmotionButton onClick={this.props.onClick} emotion='suprised'/>
        <Link to="/about"><AboutButton/></Link>
      </NavBar>
    )
  }
}

export default Navigation;
