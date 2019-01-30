import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import About from "./About";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

class App extends Component {
  render() {
    return (
      <Router>
        <MainContainer>
          <Header title='cool ascii app'/>
          <Navigation/>
          <Route path="/about" component={About}/>
        </MainContainer>
      </Router>
    );
  }
}

export default App;
