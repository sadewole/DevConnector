import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { validateInputName } from '../auth/validator';

export default class PostFeed extends Component {
  state = {
    post: '',
    error: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

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

  handleSubmit = e => {
    e.preventDefault();
    let { post } = this.state;

    if (validateInputName(post)) {
      // handle validity
      this.setState({
        error: {
          post: true
        }
      });
      return;
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='textarea'
            className='my-4'
            rows='4'
            placeholder='Create a post'
            name='post'
            value={this.state.post}
            onChange={this.handleChange}
            style={{ borderColor: this.state.error['post'] ? 'red' : '' }}
          />
          <small className='text-danger mb-4'>
            <p>{this.state.error['post'] ? 'Field must not be empty' : ''}</p>
          </small>
          <button className='button bg-dark text-white'>Submit</button>
        </Form>
      </div>
    );
  }
}
