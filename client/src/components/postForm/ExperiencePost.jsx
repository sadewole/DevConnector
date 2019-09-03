import React, { Component } from 'react';
import Title from '../content/Title';
import { Link } from 'react-router-dom';
import { Form, Input, Label, FormGroup } from 'reactstrap';

export default class ExperiencePost extends Component {
  state = {
    isCurrent: false,
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  toggleCurrent = () => {
    if (this.state.isCurrent === true) {
      this.setState({
        endDate: ''
      });
    }

    this.setState({
      isCurrent: !this.state.isCurrent
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = () => {
    console.log('issokay...oooo');
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='Add an experience'
          icon='fas fa-code-branch fa-2x'
          subtitle='Add any developer / programing positions that you have had in the past'
        />
        <small className='muted'>*=required fields</small>

        <section className='my-4'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type='text'
              placeholder='* Job Title'
              name='jobTitle'
              onChange={this.onChange}
              className='mb-2'
            />
            <Input
              type='text'
              placeholder='* Company'
              name='company'
              onChange={this.onChange}
              className='mb-2'
            />
            <Input
              type='text'
              placeholder='Location'
              name='location'
              onChange={this.onChange}
              className='mb-2'
            />
            <FormGroup>
              <Label>From Date</Label>
              <Input
                type='date'
                className='mb-2'
                name='startDate'
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup className={this.state.isCurrent ? 'hide' : 'show'}>
              <Label>To Date</Label>
              <Input
                type='date'
                className='mb-4'
                name='endDate'
                onChange={this.onChange}
              />
            </FormGroup>
            {/* disable enddate if current job */}
            <FormGroup>
              <Label check>
                {' '}
                <input
                  type='checkbox'
                  name='current'
                  value='current'
                  onChange={this.toggleCurrent}
                />
                Current Job
              </Label>
            </FormGroup>
            <Input
              type='textarea'
              className='my-4'
              placeholder='Job Description'
              name='description'
              onChange={this.onChange}
            />
            <FormGroup className='my-4'>
              <button className='button btn-primary'>Submit</button>
              <Link to='/dashboard'>
                <button className='button btn-default'>Go Back</button>
              </Link>
            </FormGroup>
          </Form>
        </section>
      </div>
    );
  }
}
