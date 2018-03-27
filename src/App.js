import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';

import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';

// Pages
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import _404 from './containers/404';

// Components
import Header from './components/common/Header';

class App extends Component {
  render() {
    const { store, history } = this.props;

    if (!this.props) {
      return null;
    }

    return (
      <Provider store={ store }>
        <Router history={ history }>
          <div className="wrapper">
            <Header title="Bitcoin Lab"/>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/about" component={ About }/>
              <Route exact path="/contact" component={ Contact }/>
              <Route component={ _404 }/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
