import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { validateInputName } from '../auth/validator';
import { postComment, getSinglePostFeed } from '../../actions/postFeedAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class postDiscussion extends Component {
  state = {
    text: '',
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
    let { text } = this.state;
    const { _id } = this.props.post;

    if (validateInputName(text)) {
      // handle validity
      this.setState({
        error: {
          text: true
        }
      });
      return;
    }

    this.props.postComment({ text }, _id);
    this.setState({
      text: ''
    });
  };
  render() {
    return (
      <div className='mt-3 mb-3'>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='textarea'
            className='my-4'
            rows='4'
            placeholder='Comment on a post'
            name='text'
            style={{ borderColor: this.state.error['text'] ? 'red' : '' }}
            value={this.state.text}
            onChange={this.handleChange}
          />
          <small className='text-danger mb-4'>
            <p>{this.state.error['text'] ? 'Field must not be empty' : ''}</p>
          </small>
          <button className='button bg-dark text-white'>Submit</button>
        </Form>
      </div>
    );
  }
}

postDiscussion.propTypes = {
  post: PropTypes.object.isRequired,
  postComment: PropTypes.func.isRequired,
  getSinglePostFeed: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    post: state.postFeed.post
  };
};
export default connect(mapStateToProps, { postComment, getSinglePostFeed })(
  postDiscussion
);
