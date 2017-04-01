import React from 'react';

import Footer from './parts/Footer';
import Header from './parts/Header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
