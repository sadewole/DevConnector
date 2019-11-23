import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUserPro } from '../../actions/profileAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContentPanel extends Component {
  componentDidMount() {
    this.props.getAllUserPro();
  }

  static propTypes = {
    getAllUserPro: PropTypes.func.isRequired,
    allProfile: PropTypes.array.isRequired
  };

  render() {
    return this.props.allProfile.map(item => {
      return (
        <div key={item._id} className='container-fluid panel mb-5'>
          <img
            src='./image/blank-picture.png'
            alt='imageGravatar'
            className='img-fluid panel-img'
          />
          <div className='short-prof'>
            <h2>{item.name}</h2>
            <p>{item.company ? `Developer at ${item.company}` : null}</p>
            <p>{item.location ? item.location : null}</p>
            <Link to={`/profile/${item._id}`}>
              <button className='button btn-primary'>View Profile</button>
            </Link>
          </div>
          <div className='sm-hidden'>
            {item.skills
              ? item.skills.split(',').map((i, k) => {
                  return (
                    <ul key={k}>
                      <li>
                        <span>
                          <i className='fas fa-check mr-2'></i>
                        </span>
                        {i}
                      </li>
                    </ul>
                  );
                })
              : null}
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    allProfile: state.profile.allProf
  };
};

export default connect(mapStateToProps, { getAllUserPro })(ContentPanel);
