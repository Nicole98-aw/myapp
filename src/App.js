import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
  return (
    <div className="App">
       <h1>My First React app!</h1>
       <p>Welcome :)</p>
       <Ninjas name="Nicky" age="20" belt="black"/>
       <Ninjas name="Bianca" age="30" belt="white"/>
    </div>
  );
}
}

export default App;
