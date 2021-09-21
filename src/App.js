import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes'


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App;