import React, { Component } from 'react';
import Title from '../content/Title';
import { Link } from 'react-router-dom';
import { Form, Input, FormGroup } from 'reactstrap';
import { validateInputName, validateLink } from '../auth/validator';

export default class ProfilePost extends Component {
  state = {
    isOpen: true,
    status: '',
    company: '',
    website: '',
    location: '',
    skills: '',
    github: '',
    bio: '',
    facebook: '',
    twitter: '',
    youtube: '',
    instagram: '',
    linkedin: '',
    error: {}
  };

  static defaultProps = {
    status: [
      '* Select Professional Status',
      'Junior Developer',
      'Senior Developer',
      'Manager',
      'Instructor',
      'Student or learning',
      'Intern',
      'Other'
    ]
  };

  toggleBlock = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleAllError = e => {
    // Handle input error
    if (e.target.value.length > 0) {
      this.setState({
        error: {
          [e.target.name]: false
        }
      });
    } else {
      this.setState({
        error: {
          [e.target.name]: true
        }
      });
    }
  };

  handleStatusError = e => this.handleAllError(e);
  handleLocationError = e => this.handleAllError(e);
  handleSkillsError = e => this.handleAllError(e);
  handleBioError = e => this.handleAllError(e);

  handleTwitterUrl = e => {
    const { twitter } = this.state;
    if (!validateLink(twitter)) {
      // handle validity
      // this.setState({
      //   error: {
      //     twitter: true
      //   }
      // });
      console.log('invalid address');

      console.log(this.state.error['twitter']);
    } else {
      console.log('valid address');
    }

    // this.handleAllError(e);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit form ooo');
    this.handleTwitterUrl();
  };

  render() {
    const options = this.props.status.map((i, k) => {
      return (
        <option value={i} key={k}>
          {i}
        </option>
      );
    });

    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='create your profile'
          icon='fas fa-user-alt fa-2x'
          subtitle="Let's get some information to make your profile stand out"
        />
        <small className='muted'>*=required fields</small>
        <section>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className='mb-2'>
              <Input
                type='select'
                name='status'
                onChange={e => {
                  this.onChange(e);
                  this.handleStatusError(e);
                }}
                style={{ borderColor: this.state.error['status'] ? 'red' : '' }}
              >
                {options}
              </Input>
              <small className='muted'>
                Give us an idea of where you are at in your career
              </small>
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['status'] ? 'Field must not be empty' : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                name='company'
                placeholder='Company'
                onChange={this.onChange}
              />
              <small className='muted'>
                Could be your own company or one you work for
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                placeholder='Website'
                name='website'
                onChange={this.onChange}
              />
              <small className='muted'>
                Could be your own company or one you work for
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                placeholder='* Location'
                name='location'
                onChange={e => {
                  this.onChange(e);
                  this.handleLocationError(e);
                }}
                style={{
                  borderColor: this.state.error['location'] ? 'red' : ''
                }}
              />
              <small className='muted'>
                City & state suggested (eg. Boston, MA )
              </small>
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['location']
                    ? 'Field must not be empty'
                    : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                placeholder='* Skills'
                name='skills'
                onChange={e => {
                  this.onChange(e);
                  this.handleSkillsError(e);
                }}
                style={{ borderColor: this.state.error['skills'] ? 'red' : '' }}
              />
              <small className='muted'>
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['skills'] ? 'Field must not be empty' : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                placeholder='Github Username'
                className='form-control'
                name='github'
                onChange={this.onChange}
              />
              <small className='muted'>
                If you want your lastest repos and a Github link, include your
                username
              </small>
              <small className='text-danger mb-4'>
                <p>{this.state.error['github'] ? 'Invalid URL' : ''}</p>
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='textarea'
                placeholder='* A short bio of yourself'
                className='form-control'
                name='bio'
                onChange={e => {
                  this.onChange(e);
                  this.handleBioError(e);
                }}
                style={{ borderColor: this.state.error['bio'] ? 'red' : '' }}
              />
              <small className='muted'>Tell us a little about yourself</small>
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['bio'] ? 'Field must not be empty' : ''}
                </p>
              </small>
            </FormGroup>

            {/* Optional profile details */}
            <div className=''>
              <button
                type='button'
                className='button btn-default'
                onClick={this.toggleBlock}
              >
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>
            <div className={this.state.isOpen ? 'hide' : 'show'}>
              <div className='d-flex my-4'>
                <i className='fab fa-twitter fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Twitter'
                  name='twitter'
                  className='form-control'
                  onChange={e => {
                    this.onChange(e);
                    this.handleTwitterUrl(e);
                  }}
                  style={{
                    borderColor: this.state.error['twitter'] ? 'red' : ''
                  }}
                />
                <small className='text-danger mb-4'>
                  <p>{this.state.error['twitter'] ? 'Invalid URL' : ''}</p>
                </small>
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-facebook fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  className='form-control'
                  onChange={this.onChange}
                  style={{
                    borderColor: this.state.error['facebook'] ? 'red' : ''
                  }}
                />
                <small className='text-danger mb-4'>
                  <p>{this.state.error['facebook'] ? 'Invalid URL' : ''}</p>
                </small>
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-instagram fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Instagram URL'
                  className='form-control'
                  name='instagram'
                  onChange={this.onChange}
                  style={{
                    borderColor: this.state.error['instagram'] ? 'red' : ''
                  }}
                />
                <small className='text-danger mb-4'>
                  <p>{this.state.error['instagram'] ? 'Invalid URL' : ''}</p>
                </small>
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-youtube fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Youtube URL'
                  className='form-control'
                  name='youtube'
                  onChange={this.onChange}
                  style={{
                    borderColor: this.state.error['youtube'] ? 'red' : ''
                  }}
                />
                <small className='text-danger mb-4'>
                  <p>{this.state.error['youtube'] ? 'Invalid URL' : ''}</p>
                </small>
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-linkedin fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Linkedin URL'
                  className='form-control'
                  name='linkedin'
                  onChange={this.onChange}
                  style={{
                    borderColor: this.state.error['linkedin'] ? 'red' : ''
                  }}
                />
                <small className='text-danger mb-4'>
                  <p>{this.state.error['linkedin'] ? 'Invalid URL' : ''}</p>
                </small>
              </div>
            </div>

            <div className='my-4'>
              <button className='button btn-primary'>Submit</button>
              <Link to='/dashboard'>
                <button className='button btn-default'>Go Back</button>
              </Link>
            </div>
          </Form>
        </section>
      </div>
    );
  }
}
