import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Developers from './components/Developers';
import Dashboard from './components/Dashboard';
import Posts from './components/Posts';
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import ProfilePost from './components/postForm/ProfilePost';
import EducationPost from './components/postForm/EducationPost';
import ExperiencePost from './components/postForm/ExperiencePost';
// import ProfilePost from './components/postForm/ProfilePost';

class App extends Component {
  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/developers' component={Developers} />
          <Route path='/posts' component={Posts} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={SignIn} />
          <Route path='/addProfile' component={ProfilePost} />
          <Route path='/addEducation' component={EducationPost} />
          <Route path='/addExperience' component={ExperiencePost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
