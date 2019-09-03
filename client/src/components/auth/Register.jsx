import React, { Component } from 'react';
// import Title from '../Title'
import Title from '../content/Title';

export default class Register extends Component {
  render() {
    return (
      <div className='container p-5 mt-5'>
        <Title
          title='Sign Up'
          icon='fas fa-user-alt fa-2x'
          subtitle='Create Your Account'
        />

        <div>
          <form className='form'>
            <input
              type='text'
              placeholder='Name'
              className='form-control mb-4'
            />
            <input type='email' placeholder='Email' className='form-control' />
            <small className='muted'>
              This site uses Gravatar, so if you want profile image, use
              Gravatar email
            </small>
            <input
              type='password'
              className='form-control mt-4 mb-4'
              placeholder='Password'
            />
            <input
              type='password'
              className='form-control mb-4'
              placeholder='Confirm Password'
            />
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
