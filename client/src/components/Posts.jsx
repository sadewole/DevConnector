import React, { Component } from 'react';
import Title from './content/Title';
import PostFeed from './postForm/PostFeed';
import PostFeedPanel from './content/PostFeedPanel';

export default class Posts extends Component {
  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='Posts'
          icon='fas fa-user-alt fa-2x'
          subtitle='Welcome to the community'
        />
        <p className='bg-primary text-white p-2 lead'>say something...</p>
        <PostFeed /> <br />
        <PostFeedPanel />
      </div>
    );
  }
}
