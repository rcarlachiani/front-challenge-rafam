import React from 'react';
import Sidebar from 'components/molecules/Sidebar';
import BaseHeader from 'components/atoms/BaseHeader';
import BottomHeader from 'components/atoms/StatusHeader';
import './styles.scss';

const MainLayout = ({ children, handleLogout }) => {
  return (
    <div className='desktop-main-layout-container'>
      <Sidebar />
      <div className='right-layout-container'>
        <BaseHeader handleLogout={handleLogout}/>
        <BottomHeader />
        <div className='right-layout-content' id='right-layout-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
