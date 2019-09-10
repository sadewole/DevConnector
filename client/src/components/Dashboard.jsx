import React, { Component } from 'react';
import Title from './content/Title';
import { Link } from 'react-router-dom';
import Experience from './content/ExperiencePanel';
import Education from './content/EducationPanel';
import { loadUser } from '../actions/authAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  state = {
    userName: ''
  };

  static propTypes = {
    dash: PropTypes.object
  };

  // componentDidMount() {
  //   this.props.loadUser();
  // }

  componentDidUpdate() {
    this.setState({
      userName: this.props.dash.userName
    });
  }

  deleteAccount = () => {
    console.log('Account Delete');
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='dashboard'
          icon='fas fa-user-alt fa-2x'
          subtitle={'Welcome ' + this.state.userName}
        />
        <div className='dash-buttons'>
          <Link to='/addProfile' className='button btn-default'>
            <i className='fas fa-user-circle text-primary'></i> Edit Profile
          </Link>
          <Link to='/addExperience' className='button btn-default'>
            <i className='fab fa-black-tie text-primary'></i> Add Experience
          </Link>
          <Link to='addEducation' className='button btn-default'>
            <i className='fas fa-graduation-cap text-primary'></i> Add Education
          </Link>
        </div>
        {/* Experience Credentials */}
        <Experience />
        {/* Education Credentials */}
        <Education />
        <div className='my-2'>
          <button className='button btn-danger' onClick={this.deleteAccount}>
            <i className='fas fa-user-minus'></i> Delete My Account
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dash: state.dash
  };
};

export default connect(
  mapStateToProps,
  { loadUser }
)(Dashboard);
