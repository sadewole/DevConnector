import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid home-content pt-5'>
        <div className='rows p-5'>
          <div className='rows-fl'>
            <div className='rows-fl-inner'>
              <h1>Developer Connector</h1>
              <p>
                Create developer profile/portfolio, share posts and get help
                from other developers
              </p>
            </div>
            <div className='rows-btn'>
              <Link to='/register'>
                <button className='button btn-primary'>Sign Up</button>
              </Link>
              <Link to='/signin'>
                <button className='button btn-default'>Login</button>
              </Link>
            </div>
          </div>
          <div className='rows-fr'>
            <img src='./image/home-bg.jpg' className='img-fluid' alt='bg' />
          </div>
        </div>
      </div>
    );
  }
}
