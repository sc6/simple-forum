import React from 'react';
import Header from './Header';
import Thread from './Thread';
import Sidebar from './Sidebar';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header 
        	userName={'john_sample'}
        />
        <Sidebar />
        <Thread id={123} />
      </div>
    );
  }
}

export default App;
