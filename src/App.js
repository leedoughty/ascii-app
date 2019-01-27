import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header title='cool ascii app'/>
        <Navigation/>
      </MainContainer>
    );
  }
}

export default App;
