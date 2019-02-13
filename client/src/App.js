import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import AdsListContainer from './components/AdsListContainer';
import AdDetailsContainer from './components/AdDetailsContainer';

import store from './store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path='/' component={AdsListContainer} />
          <Route exact path='/ads' component={AdsListContainer} />
          <Route path='/ads/:id' component={AdDetailsContainer} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
