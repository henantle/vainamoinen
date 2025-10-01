import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPage from './pages/FrontPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={FrontPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));