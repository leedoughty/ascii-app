import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  font-family: open sans;
`

class App extends Component {
  render() {
    return (
        <header>
          <Title>cool ascii app</Title>
        </header>
    );
  }
}

export default App;
