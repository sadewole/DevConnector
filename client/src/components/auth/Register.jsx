import React, { Component } from 'react';
import Title from '../content/Title';
import { Alert } from 'reactstrap';
import { validateEmail, validatePassword } from './validator';
import { connect } from 'react-redux';
import { register } from '../../actions/authAction';
import { clearError } from '../../actions/errorAction';
import PropTypes from 'prop-types';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errName: false,
    errEmail: false,
    errPassword: false,
    errConfPassword: false,
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for registration fail
      if (error.id === 'REGISTER_FAIL') {
        console.log('failed');
        this.setState({
          msg: error.msg.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }
  }

  handleNameError = e => {
    // Handle input name error
    if (e.target.value.length > 0) {
      this.setState({
        errName: false
      });
    } else {
      this.setState({
        errName: true
      });
    }
  };

  handleEmailError = e => {
    // Handle input email error
    if (e.target.name === 'email' && e.target.value.length > 0) {
      this.setState({
        errEmail: false
      });
    } else {
      this.setState({
        errEmail: true
      });
    }
  };

  handlePasswordError = e => {
    // Handle input password error
    if (e.target.name === 'password' && e.target.value.length > 0) {
      this.setState({
        errPassword: false
      });
    } else {
      this.setState({
        errPassword: true
      });
    }
  };

  handleConfPasswordError = e => {
    // Handle input confirm password error
    if (e.target.name === 'confirmPassword' && e.target.value.length > 0) {
      this.setState({
        errConfPassword: false
      });
    } else {
      this.setState({
        errConfPassword: true
      });
    }
  };

  // handle state values
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (name === '' || /^\s/.test(name)) {
      this.setState({
        errName: true
      });
      return;
    }
    if (!validateEmail(email)) {
      this.setState({
        errEmail: true
      });
      return;
    }
    if (!validatePassword(password)) {
      this.setState({
        errPassword: true
      });
      return;
    }
    if (password !== confirmPassword) {
      this.setState({
        errConfPassword: true
      });
      return;
    }

    const data = { name, email, password };

    this.props.register(data);
  };

  render() {
    return (
      <div className='container p-5 mt-5'>
        <Title
          title='Sign Up'
          icon='fas fa-user-alt fa-2x'
          subtitle='Create Your Account'
        />
        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
        <div>
          <form className='form' onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              className='form-control'
              name='name'
              onChange={e => {
                this.handleChange(e);
                this.handleNameError(e);
              }}
              style={{ borderColor: this.state.errName ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>{this.state.errName ? 'Enter a valid username' : ''}</p>
            </small>
            <input
              type='text'
              placeholder='Email'
              className='form-control'
              name='email'
              onChange={e => {
                this.handleChange(e);
                this.handleEmailError(e);
              }}
              style={{ borderColor: this.state.errEmail ? 'red' : '' }}
            />
            <small className='text-danger'>
              <p>{this.state.errEmail ? 'Enter a valid email' : ''}</p>
            </small>
            <small className='muted'>
              This site uses Gravatar, so if you want profile image, use
              Gravatar email
            </small>
            <input
              type='password'
              className='form-control mt-4'
              placeholder='Password'
              name='password'
              onChange={e => {
                this.handleChange(e);
                this.handlePasswordError(e);
              }}
              style={{ borderColor: this.state.errPassword ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.errPassword
                  ? 'Password must not contain space and must be 5 characters or more'
                  : ''}
              </p>
            </small>
            <input
              type='password'
              className='form-control'
              placeholder='Confirm Password'
              name='confirmPassword'
              onChange={e => {
                this.handleChange(e);
                this.handleConfPasswordError(e);
              }}
              style={{ borderColor: this.state.errConfPassword ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>{this.state.errConfPassword ? 'Password do not match' : ''}</p>
            </small>
            <button className='button btn-primary mb-4'>Register</button>
          </form>
          <p>
            Already have an account?{' '}
            <a href='/signin' className='primary'>
              Sign In
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { register, clearError }
)(Register);
