import React, { Component } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import Title from '../content/Title';

export default class EducationPost extends Component {
  state = {
    school: '',
    degree: '',
    study: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
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
    console.log('submit form ---');
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
              onChange={this.onChange}
            />
            <Input
              type='text'
              placeholder='* Degree or Certificate'
              className='mb-2'
              name='degree'
              onChange={this.onChange}
            />
            <Input
              type='text'
              name='study'
              className='mb-2'
              placeholder='Field Of Study'
              onChange={this.onChange}
            />
            <FormGroup>
              <Label for='startDate'>From Date</Label>
              <Input
                type='date'
                name='startDate'
                className='mb-2'
                onChange={this.onChange}
              />
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
              placeholder='Program Description'
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
