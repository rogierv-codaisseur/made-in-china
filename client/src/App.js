import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample 1</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Sample 2</td>
              <td>345</td>
            </tr>
            <tr>
              <td>Sample 3</td>
              <td>456</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
