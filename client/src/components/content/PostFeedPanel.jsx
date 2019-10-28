import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PostFeedPanel extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className='row mt-3 mb-3 border p-2'>
        <div className='text-center col-md-2 col-xs-12 '>
          <img
            src='./image/blank-picture.png'
            alt='imageGravatar'
            className='img-fluid post-img'
          />
          <p className='text-primary lead'>John Doe</p>
        </div>
        <div className='col-md-10 col-xs-12 '>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            debitis vero numquam excepturi iure pariatur assumenda illum
            praesentium delectus officia? Molestiae possimus aperiam doloremque
            ad exercitationem. Est maiores dolorum distinctio!
          </p>
          <button class='button'>
            <i class='fas fa-heart text-danger'></i>
            <span>4</span>
          </button>
          <Link to='/post' class='button btn-primary'>
            Discussion
          </Link>
        </div>
      </div>
    );
  }
}
