import React, { Component } from 'react';
import Title from '../content/Title';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { validateEmail } from './validator';
import { login } from '../../actions/authAction';
import PropTypes from 'prop-types';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    msg: null,
    errEmail: false,
    errPassword: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for registration fail
      if (error.id === 'LOGIN_FAIL') {
        this.setState({
          msg: error.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }

    // redirected if no error
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

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
    // Handle input email error
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!validateEmail(email)) {
      this.setState({
        errEmail: true
      });
      return;
    }
    if (password.length < 1) {
      this.setState({
        errPassword: true
      });
      return;
    }

    this.props.login({ email, password });
  };

  render() {
    return (
      <div className='container p-5 mt-5'>
        <Title
          title='Sign In'
          icon='fas fa-user-alt fa-2x'
          subtitle='Sign Into Account'
        />
        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
        <div>
          <form className='form' onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Email'
              name='email'
              className='form-control mb-4'
              onChange={e => {
                this.handleChange(e);
                this.handleEmailError(e);
              }}
              style={{ borderColor: this.state.errEmail ? 'red' : '' }}
            />
            <small className='text-danger'>
              <p>{this.state.errEmail ? 'Enter a valid email' : ''}</p>
            </small>
            <input
              type='password'
              name='password'
              className='form-control mb-4'
              placeholder='Password'
              onChange={e => {
                this.handleChange(e);
                this.handlePasswordError(e);
              }}
              style={{ borderColor: this.state.errPassword ? 'red' : '' }}
            />
            <small className='text-danger'>
              <p>{this.state.errPassword ? 'Enter your password' : ''}</p>
            </small>
            <button className='button btn-primary mb-4'>Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <a href='/register' className='primary'>
              Register
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
  { login }
)(SignIn);
