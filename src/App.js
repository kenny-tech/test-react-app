import React, { Component } from 'react';

import Items from './components/Items';

class App extends Component {
  render() {

    const items = [
      'Javascript',
      'React',
      'Redux'
    ];

    return (  
      <Items items={items} />
    );
  }
}

export default App;
