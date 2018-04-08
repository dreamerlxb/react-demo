import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Me from './components/me';
import Article from './components/article';
import Topic from './components/topic';
import EchartsDemo from './components/charts';
import NotFound from './components/notFound';

import reducers from './reducers';

import './App.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {

  componentDidMount() {
    var urlToChangeStream = 'http://127.0.0.1:3006/api/Allocations/change-stream?_format=event-stream&access_token=GI3Cfyo090HM2EimLdGYduRL83lQdzgrZuBYfIOfKwLrQMkvYytZwFYMafrPci4E';
    var src = new EventSource(urlToChangeStream);
    src.addEventListener('data', function(msg) {
      var data = JSON.parse(msg.data);
      console.log(data); // the change object
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route path='/article' component={Article} />
              <Route path='/charts' component={EchartsDemo} />
              <Route path='/topic' component={Topic} />
              <Route path='/me' component={Me} />
              <Route exact component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
