import React, { Component } from 'react';
import Title from '../content/Title';
import { Link } from 'react-router-dom';
import { Form, Input, FormGroup } from 'reactstrap';

export default class ProfilePost extends Component {
  state = {
    isOpen: true,
    status: [
      'Select Professional Status',
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

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = () => {
    console.log('submit form ooo');
  };

  render() {
    const options = this.state.status.map((i, k) => {
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
              <Input type='select' name='status' onChange={this.onChange}>
                {options}
              </Input>
              <small className='muted'>
                Give us an idea of where you are at in your career
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
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
                placeholder='Location'
                name='location'
                onChange={this.onChange}
              />
              <small className='muted'>
                City & state suggested (eg. Boston, MA )
              </small>
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='text'
                placeholder='* Skills'
                name='skills'
                onChange={this.onChange}
              />
              <small className='muted'>
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
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
            </FormGroup>
            <FormGroup className='mb-2'>
              <Input
                type='textarea'
                placeholder='A short bio of yourself'
                className='form-control'
                name='description'
                onChange={this.onChange}
              />
              <small className='muted'>Tell us a little about yourself</small>
            </FormGroup>

            {/* Optional profile details */}
            <div className='d-md-flex d-sm-block my-2'>
              <p className='button btn-default' onClick={this.toggleBlock}>
                Add Social Network Links
              </p>
              <p>Optional</p>
            </div>
            <div className={this.state.isOpen ? 'hide' : 'show'}>
              <div className='d-flex my-4'>
                <i className='fab fa-twitter fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Twitter'
                  name='twitter'
                  className='form-control'
                  onChange={this.onChange}
                />
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-facebook fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  className='form-control'
                  onChange={this.onChange}
                />
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-instagram fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Instagram URL'
                  className='form-control'
                  name='instagram'
                  onChange={this.onChange}
                />
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-youtube fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Youtube URL'
                  className='form-control'
                  name='youtube'
                  onChange={this.onChange}
                />
              </div>
              <div className='d-flex my-4'>
                <i className='fab fa-linkedin fa-2x mr-2'></i>{' '}
                <Input
                  type='text'
                  placeholder='Linkedin URL'
                  className='form-control'
                  name='linkedin'
                  onChange={this.onChange}
                />
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
