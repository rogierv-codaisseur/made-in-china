import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';

import AdsListContainer from './components/AdsListContainer';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AdsListContainer />
      </Provider>
    );
  }
}

export default App;
