import React, { Component } from 'react';
import Title from './content/Title';
import ContentPanel from './content/ContentPanel';

export default class Developers extends Component {
  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        <Title
          title='Developers'
          icon='fab fa-connectdevelop fa-2x'
          subtitle='Browse and connect with developers'
        />
        {/* panel */}
        <ContentPanel />
        <ContentPanel />
      </div>
    );
  }
}
