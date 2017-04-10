import React, { Component } from 'react';
import './App.css';
import Animated from 'animated/lib/targets/react-dom';

import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: new Animated.Value(0),
      showMenu: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showMenu !== this.state.showMenu) {
      Animated.timing(
        this.state.animation,
        {
          toValue: this.state.showMenu ? 1 : 0,
          duration: 1000,
        },
      ).start()
    }
  }

  test = () => {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }))
  }

  render() {
    return (
      <nav className="App">
        <button
          onClick={ this.test }
          style={{ position: 'relative', zIndex: 1000  }}
        >SHOW!</button>

        <Menu animation={ this.state.animation } />
      </nav>
    );
  }
}

export default App;
