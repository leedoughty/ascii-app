import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import About from "./About";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import happyAsciis from './happyAsciis';
import sadAsciis from './sadAsciis';

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const FlexContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  height: auto;
  margin-top: 50px;
  margin-left: 25%;
  margin-right: 20%;
`

const AsciiContainer = styled.pre`
  width: 30%;
  font-family: Arial, sans-serif;
  /* border: 1px solid red; */
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmotion: 'happy'
    }
  }

  onClick = (emotion) => {
    this.setState({
      currentEmotion: emotion
    });
  }

  render() {
    const allTheAsciis = {
      happy: happyAsciis,
      sad: sadAsciis
  }

    return (
      <Router>
        <MainContainer>
          <Header title='cool ascii app'/>
          <Navigation onClick={this.onClick}/>
          <FlexContainer>
          {allTheAsciis[this.state.currentEmotion].map((item, i) => (<AsciiContainer key={i}>{item}</AsciiContainer>))}
          </FlexContainer>
          <Route path="/about" component={About}/>
        </MainContainer>
      </Router>
    );
  }
}

export default App;
