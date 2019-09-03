import React, { Component } from 'react';
import Title from '../content/Title';

export default class SignIn extends Component {
  render() {
    return (
      <div className='container p-5 mt-5'>
        <Title
          title='Sign In'
          icon='fas fa-user-alt fa-2x'
          subtitle='Sign Into Account'
        />

        <div>
          <form className='form'>
            <input
              type='email'
              placeholder='Email'
              className='form-control mb-4'
            />
            <input
              type='password'
              className='form-control mb-4'
              placeholder='Password'
            />
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
