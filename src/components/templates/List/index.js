import React from 'react';
import MainLayout from 'components/organisms/MainLayout';
import './styles.scss';
import CardSection from 'components/molecules/CardSection';

const List = ({ handleLogout }) => {
  return (
    <MainLayout handleLogout={handleLogout}> 
      <div className='right-layout-list-header'>
        <h1>Configuración</h1>
      </div>
      <CardSection />
    </MainLayout>
  );
};

export default List;
