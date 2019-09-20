import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleUserPro } from '../../actions/profileAction';
import { getSingleUserExp } from '../../actions/experienceAction';
import { getSingleUserEdu } from '../../actions/educationAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProfilePanel extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.props.getSingleUserPro(id);
    await this.props.getSingleUserExp(id);
    await this.props.getSingleUserEdu(id);
  }

  static propTypes = {
    getSingleUserPro: PropTypes.func.isRequired,
    getSingleUserExp: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    exper: PropTypes.object.isRequired,
    educ: PropTypes.object.isRequired,
    getSingleUserEdu: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      skills,
      company,
      bio,
      email,
      facebook,
      instagram,
      github,
      linkedin,
      location,
      status,
      twitter,
      website,
      youtube
    } = this.props.profile;
    return (
      <div className='container-fluid mt-5 p-5'>
        <Link to='/developer'>
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

            <h1 className=''>{name}</h1>
            <p className='lead'>{company ? `Developer at ${company}` : null}</p>
            <p>{location ? location : null}</p>

            <div className='icons my-1 '>
              {website ? (
                <a href={website} rel='noopener noreferrer' target='_blank'>
                  <i className='fas fa-globe fa-2x'></i>
                </a>
              ) : null}

              {twitter ? (
                <a href={twitter} rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-twitter fa-2x'></i>
                </a>
              ) : null}

              {facebook ? (
                <a href={facebook} rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-facebook fa-2x'></i>
                </a>
              ) : null}

              {linkedin ? (
                <a href={linkedin} rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              ) : null}

              {instagram ? (
                <a href={instagram} rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
              ) : null}

              {youtube ? (
                <a href={youtube} rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-youtube fa-2x'></i>
                </a>
              ) : null}
            </div>
          </div>
          {/* top ending */}
          {/* About layer */}
          <div className='profile-about bg-lights my-4 p-5 text-center'>
            {bio ? (
              <div>
                <h2 className='text-primary'>Bio</h2>
                <p>{bio}</p>
                <div className='line'></div>
              </div>
            ) : null}

            {skills ? (
              <div>
                <h2 className='text-primary'>Skill Set</h2>
                <div className='skills d-md-flex d-sm-block'>
                  {skills.split(',').map((i, k) => {
                    return (
                      <div key={k}>
                        <div className='p-2'>
                          <i className='fas fa-check'></i>
                          {i}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          {/* third layer */}
          <div className='d-md-flex d-sm-block'>
            {/* Experience Layer */}
            {this.props.exper.exp.length !== 0 ? (
              <div className='profile-exp bg-white p-3 '>
                <h2 className='text-primary'>Experience</h2>
                {this.props.exper.exp.map(i => {
                  return (
                    <div key={i._id}>
                      <h3>{i.company}</h3>
                      <p>
                        {' '}
                        {new Date(i.startDate)
                          .toDateString()
                          .slice(4, 15)} -{' '}
                        {i.endDate
                          ? new Date(i.endDate).toDateString().slice(4, 15)
                          : i.currentDate}
                      </p>
                      <p>
                        <strong>Position: </strong>
                        {i.job}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {i.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {/* Education layer */}
            {this.props.educ.edu.length !== 0 ? (
              <div className='profile-edu bg-white p-3'>
                <h2 className='text-primary'>Education</h2>
                {this.props.educ.edu.map(i => {
                  return (
                    <div key={i._id}>
                      <h3>{i.school}</h3>
                      <p>
                        {' '}
                        {new Date(i.startDate)
                          .toDateString()
                          .slice(4, 15)} -{' '}
                        {i.endDate
                          ? new Date(i.endDate).toDateString().slice(4, 15)
                          : i.currentDate}
                      </p>
                      <p>
                        <strong>Degree: </strong>
                        {i.degree}
                      </p>
                      <p>
                        <strong>Field Of Study: </strong>
                        {i.study}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {i.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
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
    profile: state.profile.prof,
    exper: state.experience,
    educ: state.education
  };
};

export default connect(
  mapStateToProps,
  { getSingleUserExp, getSingleUserPro, getSingleUserEdu }
)(ProfilePanel);
