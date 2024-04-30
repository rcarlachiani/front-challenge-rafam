import React from 'react';
import DropdownSidebar from 'components/atoms/DropdownSidebar';
import './styles.scss';
import Logo from 'components/atoms/Logo';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-main-section'>
        <div className='sidebar-logo-container'>
          <Logo />
        </div>
        <div className='menu-items-container'>
          <div className='item-home'>Inicio</div>
          <DropdownSidebar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
