import React, { Component } from 'react';
import Header from './Header';
import EmotionButton from './EmotionButton';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title='cool ascii app'/>
        <EmotionButton emotion='happy'/>
        <EmotionButton emotion='sad'/>
        <EmotionButton emotion='neutral'/>
        <EmotionButton emotion='angry'/>
        <EmotionButton emotion='suprised'/>
      </div>
    );
  }
}

export default App;
