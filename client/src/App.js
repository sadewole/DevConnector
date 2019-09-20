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
import ProfilePanel from './components/content/ProfilePanel';
import DefaultPage from './components/DefaultPage';
// import ProfilePost from './components/postForm/ProfilePost';
import authGuard from './HOC/authGuard';
import { loadUser } from './actions/authAction';
import store from './store';

class App extends Component {
  // load user
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={authGuard(Dashboard)} />
          <Route exact path='/developers' component={Developers} />
          <Route exact path='/posts' component={authGuard(Posts)} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/addProfile' component={authGuard(ProfilePost)} />
          <Route
            exact
            path='/addEducation'
            component={authGuard(EducationPost)}
          />
          <Route
            exact
            path='/addExperience'
            component={authGuard(ExperiencePost)}
          />
          <Route exact path='/profile/:id' component={authGuard(ProfilePanel)} />
          <Route component={DefaultPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
