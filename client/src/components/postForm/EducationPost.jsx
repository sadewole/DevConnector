import React, { Component } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import Title from '../content/Title';
import { validateInputName } from '../auth/validator';

export default class EducationPost extends Component {
  state = {
    school: '',
    degree: '',
    study: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
    description: '',
    error: {}
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      school,
      degree,
      study,
      startDate,
      endDate,
      isCurrent,
      description
    } = this.state;

    if (validateInputName(school)) {
      return (this.setState({
        error['school']: true
      })
    }
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='Add Your Education'
          icon='fas fa-graduation-cap'
          subtitle='Add any school, bootcamp, etc that you have attended'
        />

        <small className='muted'>*=required fields</small>

        <section className='my-4'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type='text'
              className='mb-2'
              placeholder='* School or Bootcamp'
              name='school'
              onChange={e => {
                this.handleChange(e);
                this.handleNameError(e);
              }}
              style={{ borderColor: this.state.error['school'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['school'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <Input
              type='text'
              placeholder='* Degree or Certificate'
              className='mb-2'
              name='degree'
              onChange={e => {
                this.handleChange(e);
                this.handleNameError(e);
              }}
              style={{ borderColor: this.state.error['degree'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['degree'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <Input
              type='text'
              name='study'
              className='mb-2'
              placeholder='* Field Of Study'
              onChange={this.onChange}
            />
            <FormGroup>
              <Label for='startDate'>* From Date</Label>
              <Input
                type='date'
                name='startDate'
                className='mb-2'
                onChange={e => {
                  this.handleChange(e);
                  this.handleNameError(e);
                }}
                style={{
                  borderColor: this.state.error['startDate'] ? 'red' : ''
                }}
              />
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['startDate']
                    ? 'Field must not be empty'
                    : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup className={this.state.isCurrent ? 'hide' : 'show'}>
              <Label for='endDate'>To Date</Label>
              <Input
                type='date'
                name='endDate'
                className='mb-2'
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type='checkbox'
                name='current'
                value='current'
                onChange={this.toggleCurrent}
              />
              Current School
            </FormGroup>

            <Input
              type='textarea'
              className='my-4'
              placeholder='* Program Description'
              name='description'
              onChange={e => {
                this.handleChange(e);
                this.handleNameError(e);
              }}
              style={{
                borderColor: this.state.error['description'] ? 'red' : ''
              }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['description']
                  ? 'Field must not be empty'
                  : ''}
              </p>
            </small>

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
