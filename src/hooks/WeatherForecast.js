import { useState, useEffect } from 'react';

const useWeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=1'
        );

        if (response.ok) {
          const data = await response.json();
          setForecast(data.daily);
        } else {
          throw new Error('Failed to fetch weather forecast');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForecast();
  }, []);

  return { forecast, loading };
};

export default useWeatherForecast;


