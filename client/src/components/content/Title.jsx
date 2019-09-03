import React from 'react';

export default function Title({ title, icon, subtitle }) {
  return (
    <div>
      <h1 className='text-primary text-capitalize'>{title}</h1>
      <p className='lead muted text-capitalize'>
        <span className='mr-2'>
          <i className={icon}></i>
        </span>
        {subtitle}
      </p>
    </div>
  );
}
