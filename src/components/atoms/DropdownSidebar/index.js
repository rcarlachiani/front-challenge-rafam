import React, { useState } from 'react';
import './styles.scss';
import data from './items.json';

const DropdownSidebar = () => {
  const [toggleArrow, setToggleArrow] = useState(undefined);

  return (
    <ul className='dropdown-menu-list'>
      {data.map((item) => (
        <li key={item.key} className='dropdown-menu-item'>
          <div className='dropdown-item-container'>
            <div
              className='dropdown-item-icon'
              onClick={() =>
                setToggleArrow(toggleArrow === item.key ? undefined : item.key)
              }
            >
              <svg
                width='10'
                height='13'
                viewBox='0 0 10 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g
                  className='svg-item-icon'
                  transform={
                    toggleArrow === item.key ? 'rotate(90 5 6.5)' : 'rotate(0)'
                  }
                >
                  <path
                    d='M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z'
                    fill='white'
                  />
                </g>
              </svg>
            </div>
            <p
              className='dropdown-item-text'
              onClick={() =>
                setToggleArrow(toggleArrow === item.key ? undefined : item.key)
              }
            >
              {item.title}
            </p>
          </div>
          {toggleArrow === item.key ? (
            <ul className='dropdown-subMenu-list'>
              {item.subitems.map((subitem) => (
                <li key={subitem.key} className='dropdown-subMenu-item'>
                  <p className='dropdown-subMenu-item-text'>{subitem.title}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default DropdownSidebar;
