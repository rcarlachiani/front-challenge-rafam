import React from 'react';
import './styles.scss';

function Card({ title, subtitle, subitems }) {
  return (
    <div className='card-container'>
      <div className='card-border-left' />
      <div className='card-content-container'>
        <h1 className='card-title'>{title}</h1>
        <h2 className='card-subtitle'>{subtitle}</h2>
        <ul className='card-item-list'>
          {subitems.map((subitem) => (
            <li className='card-item-sublist' key={subitem.key}>
              {subitem.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
