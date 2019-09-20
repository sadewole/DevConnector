import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUserPro } from '../../actions/profileAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProfilePanel extends Component {
  static propTypes = {
    getAllUserPro: PropTypes.func.isRequired,
    allProfile: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Link to='/'>
          <button className='button btn-default'>Back to profiles</button>
        </Link>

        <section className='my-3 '>
          {/* Top  */}
          <div className='profile-top bg-primary p-5 text-white text-center'>
            <img
              className='img-fluid panel-img my-1'
              src='/image/gravatarImg.jpg'
              alt='display-img'
            />

            <h1 className=''>John Doe</h1>
            <p className='lead'>Developer at Microsoft</p>
            <p>Seattle, WA</p>

            <div className='icons my-1 '>
              <Link to='#'>
                <i className='fas fa-globe fa-2x'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-twitter fa-2x'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-facebook fa-2x'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-linkedin fa-2x'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-instagram fa-2x'></i>
              </Link>
            </div>
          </div>
          {/* top ending */}
          {/* About layer */}
          <div className='profile-about bg-lights my-4 p-5 text-center'>
            <h2 className='text-primary'>John's Bio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              vero ipsum tenetur nam repellendus asperiores obcaecati, doloribus
              odio explicabo! Numquam?
            </p>
            <div className='line'></div>
            <h2 className='text-primary'>Skill Set</h2>
            <div className='skills d-md-flex d-sm-block'>
              <div className='p-2'>
                <i className='fas fa-check'></i>HTML
              </div>
              <div className='p-2'>
                <i className='fas fa-check'></i>CSS
              </div>
              <div className='p-2'>
                <i className='fas fa-check'></i>JavaScript
              </div>
              <div className='p-2'>
                <i className='fas fa-check'></i>Python
              </div>
            </div>
          </div>
          {/* third layer */}
          <div className='d-md-flex d-sm-block'>
            {/* Experience Layer */}
            <div className='profile-exp bg-white p-3 '>
              <h2 className='text-primary'>Experience</h2>
              <div>
                <h3>Microsoft</h3>
                <p>Oct 2011 - Current</p>
                <p>
                  <strong>Position: </strong>Senior Developer
                </p>
                <p>
                  <strong>Description: </strong>Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Ex illo facere dolorum,
                  quibusdam reiciendis distinctio!
                </p>
              </div>
              <div>
                <h3>Sun Microsystems</h3>
                <p>Oct 2004 - Nov 2010</p>
                <p>
                  <strong>Position: </strong>Systems Admin
                </p>
                <p>
                  <strong>Description: </strong>Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Ex illo facere dolorum,
                  quibusdam reiciendis distinctio!
                </p>
              </div>
            </div>
            {/* Education layer */}
            <div className='profile-edu bg-white p-3'>
              <h2 className='text-primary'>Education</h2>
              <div>
                <h3>University Of Washington</h3>
                <p>Sep 1993 - June 1999</p>
                <p>
                  <strong>Degree: </strong>Masters
                </p>
                <p>
                  <strong>Field Of Study: </strong>Computer Science
                </p>
                <p>
                  <strong>Description: </strong>Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Ex illo facere dolorum,
                  quibusdam reiciendis distinctio!
                </p>
              </div>
            </div>
          </div>
          {/* GitHub Repos */}
          <div className='profile-github'>
            <h2 className='text-primary my-2'>
              <i className='fab fa-github'></i> Github Repos
            </h2>
            <div className='repo bg-white my-2 p-2'>
              <div>
                <h4>
                  <Link to='#' target='_blank'>
                    Repo One
                  </Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolore!
                </p>
              </div>

              <div>
                <ul>
                  <li className='badge badge-primary'>Stars: 44</li>
                  <li className='badge badge-dark'>Watchers: 20</li>
                  <li className='badge badge-light'>Forks: 25</li>
                </ul>
              </div>
            </div>

            <div className='repo bg-white my-2 p-2'>
              <div>
                <h4>
                  <Link to='#'>Repo Two</Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolore!
                </p>
              </div>

              <div>
                <ul>
                  <li className='badge badge-primary'>Stars: 44</li>
                  <li className='badge badge-dark'>Watchers: 20</li>
                  <li className='badge badge-light'>Forks: 25</li>
                </ul>
              </div>
            </div>

            <div className='repo bg-white my-2 p-2'>
              <div>
                <h4>
                  <Link to='#'>Repo One</Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolore!
                </p>
              </div>

              <div>
                <ul>
                  <li className='badge badge-primary'>Stars: 44</li>
                  <li className='badge badge-dark'>Watchers: 20</li>
                  <li className='badge badge-light'>Forks: 25</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allProfile: state.profile.allProf
  };
};

export default connect(
  mapStateToProps,
  { getAllUserPro }
)(ProfilePanel);
