import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/jobs" component={JobListings} />
          <Route path="/jobs/:id" component={JobDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
