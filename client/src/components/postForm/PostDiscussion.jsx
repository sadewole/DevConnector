import React from 'react';
import { Form, Input } from 'reactstrap';
import PropTypes from 'prop-types';

function postDiscussion(props) {
  const handleSubmit = () => {};
  return (
    <div className='mt-3 mb-3'>
      <Form onSubmit={handleSubmit}>
        <Input
          type='textarea'
          className='my-4'
          rows='4'
          placeholder='Comment on a post'
          name='post'
          value
          onChange
        />
        {/* <small className='text-danger mb-4'>
          <p>{this.state.error['post'] ? 'Field must not be empty' : ''}</p>
        </small> */}
        <button className='button bg-dark text-white'>Submit</button>
      </Form>
    </div>
  );
}

postDiscussion.propTypes = {};

export default postDiscussion;
