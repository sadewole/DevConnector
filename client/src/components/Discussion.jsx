import React from 'react';
import { Link } from 'react-router-dom';
import PostDiscussion from './postForm/PostDiscussion';
import PostCommentPanel from './content/PostCommentPanel';
import PostDiscussionPanel from './content/PostDiscussionPanel';

function Discussion(props) {
  return (
    <div className='container-fluid mt-5 p-5'>
      <Link to='/posts'>
        <button className='button btn-default'>Back To Posts</button>
      </Link>
      <PostDiscussionPanel id={props.match.params.id} />
      <p className='bg-primary text-white p-2 lead'>Leave a comment...</p>
      <PostDiscussion />
      <PostCommentPanel id={props.match.params.id} />
    </div>
  );
}

export default Discussion;
