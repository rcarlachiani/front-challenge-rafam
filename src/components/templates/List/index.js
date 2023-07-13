import React from 'react';
import MainLayout from 'components/organisms/MainLayout';
import './styles.scss';
import CardSection from 'components/molecules/CardSection';

const List = ({ title }) => {
  return (
    <MainLayout>
      <div className='right-layout-list-header'>
        <h1>{title}</h1>
      </div>
      <CardSection />
    </MainLayout>
  );
};

export default List;
