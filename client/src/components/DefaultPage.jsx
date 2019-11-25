import React from 'react';
import { Link } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <div className='container-fluid not-found'>
      <div className='mt-5 pt-5 not-found-text'>
        <h1 className='mute'>404 | Page not found</h1>
        <Link to='/' className='button btn-default '>
          Visit home page
        </Link>
      </div>
    </div>
  );
}
