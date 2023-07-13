import React from 'react';
import './styles.scss';
import useWeatherForecast from '../../../hooks/WeatherForecast';

const Weather = () => {
  const { forecast, loading } = useWeatherForecast();

  if (loading) {
    return <div className='forecast-text'>Cargando...</div>;
  }

  if (!forecast) {
    return (
      <div className='forecast-text'>Error al obtener datos del clima</div>
    );
  }

  return (
    <div className='forecast-container'>
      <div className='forecast-min-max'>
        <svg
          fill='rgba(18, 65, 111, 1)'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 256 256'
          width='15px'
          height='15px'
        >
          <g strokeWidth='0' />
          <g strokeLinecap='round' strokeLinejoin='round' />
          <g>
            {' '}
            <g>
              {' '}
              <path d='M136.2,178.6V28.7c0-14.5-11.9-26.4-26.4-26.4S83.3,14.1,83.3,28.7v149.9c-9.8,7.9-15.9,20.1-15.9,32.8 c0,23.3,19,42.3,42.3,42.3s42-19,42-42.3C151.8,198.7,146,186.5,136.2,178.6z M109.8,244.7c-18.2,0-33-14.8-33-33 c0-11.6,6.1-22.2,15.9-28.3V28.9c0-9.5,7.7-17.4,17.4-17.4c9.5,0,17.4,7.7,17.4,17.4v154.4c9.5,6.1,15.9,16.7,15.9,28.3 C142.8,229.9,128,244.7,109.8,244.7z' />
              <path d='M118,188.9V77.3c0-4.5-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.7-8.2,8.2v111.5c-9.3,3.4-15.9,12.2-15.9,22.5 c0,13.2,10.8,24.1,24.1,24.1s24.1-10.8,24.1-24.1C133.8,201,127.2,192.3,118,188.9z' />
              <rect x='145.4' y='29.2' width='47.1' height='9' />
              <rect x='145.4' y='59.1' width='24.4' height='9' />
              <rect x='145.4' y='89.2' width='47.1' height='9' />
              <rect x='145.4' y='119.1' width='24.4' height='9' />
              <rect x='145.4' y='149' width='47.1' height='9' />
            </g>
          </g>
        </svg>
        <p className='forecast-text text-maximum'>
          Máxima: {forecast.temperature_2m_max}°C
        </p>
      </div>
      <div className='forecast-min-max'>
        <svg
          fill='rgba(18, 65, 111, 1)'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 256 256'
          width='15px'
          height='15px'
          stroke='rgba(18, 65, 111, 1)'
        >
          <g strokeWidth='0' />
          <g strokeLinecap='round' strokeLinejoin='round' />
          <g>
            {' '}
            <g>
              {' '}
              <path d='M136.2,178.6V28.7c0-14.5-11.9-26.4-26.4-26.4S83.3,14.1,83.3,28.7v149.9c-9.8,7.9-15.9,20.1-15.9,32.8 c0,23.3,19,42.3,42.3,42.3s42-19,42-42.3C151.8,198.7,146,186.5,136.2,178.6z M109.8,244.7c-18.2,0-33-14.8-33-33 c0-11.6,6.1-22.2,15.9-28.3V28.9c0-9.5,7.7-17.4,17.4-17.4c9.5,0,17.4,7.7,17.4,17.4v154.4c9.5,6.1,15.9,16.7,15.9,28.3 C142.8,229.9,128,244.7,109.8,244.7z' />{' '}
              <path d='M118,188.9v-39.5c0-4.5-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.7-8.2,8.2v39.5c-9.3,3.4-15.9,12.2-15.9,22.5 c0,13.2,10.8,24.1,24.1,24.1s24.1-10.8,24.1-24.1C133.8,201,127.2,192.3,118,188.9z' />{' '}
              <rect x='145.4' y='29.2' width='47.1' height='9' />{' '}
              <rect x='145.4' y='59.1' width='24.4' height='9' />{' '}
              <rect x='145.4' y='89.2' width='47.1' height='9' />{' '}
              <rect x='145.4' y='119.1' width='24.4' height='9' />{' '}
              <rect x='145.4' y='149' width='47.1' height='9' />{' '}
            </g>{' '}
          </g>
        </svg>
        <p className='forecast-text'>Mínima: {forecast.temperature_2m_min}°C</p>
      </div>
    </div>
  );
};

export default Weather;
