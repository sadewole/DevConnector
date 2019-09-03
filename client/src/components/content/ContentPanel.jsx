import React, { Component } from 'react';

export default class ContentPanel extends Component {
  state = {
    arrStack: ['HTML', 'CSS', 'Python', 'JavaScript']
  };

  render() {
    return (
      <div className='container-fluid panel mb-5'>
        <img
          src='./image/gravatarImg.jpg'
          alt='imageGravatar'
          class='img-fluid panel-img'
        />
        <div className='short-prof'>
          <h2>John Doe</h2>
          <p>Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <button className='button btn-primary'>View Profile</button>
        </div>
        <div className='sm-hidden'>
          {this.state.arrStack.map((i, k) => {
            return (
              <ul>
                <li key={k}>
                  <span>
                    <i className='fas fa-check mr-2'></i>
                  </span>
                  {i}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
