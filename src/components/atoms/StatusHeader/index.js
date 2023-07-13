import React from 'react';
import './styles.scss';

import DropdownSelect from '../DropdownSelect';
import StatusIndicator from '../StatusIndicator';

const BottomHeader = () => {
  return (
    <div className='bottom-header-container'>
      <div className='bottom-header-title'>
        <p className='bottom-header-text'>Presupuesto</p>
        <div className='bottom-header-arrow'>
          <svg
            width='8'
            height='12'
            viewBox='0 0 8 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 10.58L4.57455 6L0 1.41L1.40832 0L7.40118 6L1.40832 12L0 10.58Z'
              fill='rgba(74, 202, 215, 1)'
            />
          </svg>
        </div>
        <p className='bottom-header-text text-selected'>Configuración</p>
      </div>
      <div className='bottom-header-buttons-container'>
        <p className='bottom-header-buttons-text'>Ejercicio</p>
        <DropdownSelect />
        <StatusIndicator />
      </div>
    </div>
  );
};

export default BottomHeader;
