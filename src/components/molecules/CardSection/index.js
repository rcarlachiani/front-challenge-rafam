import React from 'react';
import './styles.scss';
import Card from 'components/atoms/Card';
import data from '../../atoms/Card/cardsContent.json';

function CardSection() {
  const dataFirstSection = data.slice(0, 5);
  const dataSecondSection = data.slice(5, data.length);

  return (
    <div className='card-section-container'>
      <div className='card-column-container column-left'>
        {dataFirstSection.map((cardData) => (
          <Card
            key={cardData.key}
            title={cardData.title}
            subtitle={cardData.subtitle}
            subitems={cardData.subitems}
          />
        ))}
      </div>
      <div className='card-column-container column-right'>
        {dataSecondSection.map((cardData) => (
          <Card
            key={cardData.key}
            title={cardData.title}
            subtitle={cardData.subtitle}
            subitems={cardData.subitems}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
