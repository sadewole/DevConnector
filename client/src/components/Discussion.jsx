import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostDiscussion from './postForm/PostDiscussion';
import PostDiscussionPanel from './content/PostDiscussionPanel';

function Discussion(props) {
  return (
    <div className='container-fluid mt-5 p-5'>
      <Link to='/posts'>
        <button className='button btn-default'>Back To Posts</button>
      </Link>
      <PostDiscussionPanel />
      <p className='bg-primary text-white p-2 lead'>Leave a comment...</p>
      <PostDiscussion />
      <PostDiscussionPanel />
      <PostDiscussionPanel />
    </div>
  );
}

Discussion.propTypes = {};

export default Discussion;
