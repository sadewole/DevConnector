import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { validateInputName } from '../auth/validator';
import { connect } from 'react-redux';
import { postFeed } from '../../actions/postFeedAction';
import PropTypes from 'prop-types';

class PostFeed extends Component {
  state = {
    post: '',
    error: {}
  };

  // Props
  static propType = {
    postFeed: PropTypes.func.isReqiuired
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
    // e.preventDefault();
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

    this.props.postFeed({ text: post });
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

export default connect(null, { postFeed })(PostFeed);
