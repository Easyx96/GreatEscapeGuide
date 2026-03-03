import { useState, useEffect } from 'react';

const getWeatherIcon = (code) => {
  if (code === 0) return '☀️';
  if ([1, 2].includes(code)) return '🌤️';
  if (code === 3) return '⛅';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 61, 63, 65].includes(code)) return '🌧️';
  if ([66, 67, 71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
  if ([80, 81, 82].includes(code)) return '🌦️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '🌡️';
};

export const useWeather = (t) => {
  const [weather, setWeather] = useState({ loading: true, error: null, days: [] });

  useEffect(() => {
    let cancelled = false;
    
    const fetchWeather = async () => {
      try {
        const url =
          'https://api.open-meteo.com/v1/forecast' +
          '?latitude=37.65&longitude=21.63' +
          '&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,weathercode,windspeed_10m_max' +
          '&timezone=auto';
        const res = await fetch(url);
        if (!res.ok) throw new Error('Weather request failed');
        const json = await res.json();
        if (cancelled) return;
        
        const {
          time,
          temperature_2m_max,
          temperature_2m_min,
          apparent_temperature_max,
          apparent_temperature_min,
          weathercode,
          windspeed_10m_max,
        } = json.daily || {};
        
        if (!time || !time.length) {
          setWeather({ loading: false, error: 'no-data', days: [] });
          return;
        }
        
        const formatDateLabel = (dateStr) => {
          const date = new Date(dateStr + 'T00:00:00');
          const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const dayName = dayNames[date.getDay()];
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          return `${dayName} ${day}/${month}`;
        };
        const labelForDate = (dateStr) => {
          return formatDateLabel(dateStr);
        };
        
        const days = time.slice(0, 3).map((dateStr, idx) => ({
          date: dateStr,
          label: labelForDate(dateStr, idx),
          icon: getWeatherIcon(weathercode[idx]),
          tMax: Math.round(temperature_2m_max[idx]),
          tMin: Math.round(temperature_2m_min[idx]),
          feelsMax: Math.round(apparent_temperature_max[idx]),
          feelsMin: Math.round(apparent_temperature_min[idx]),
          wind: Math.round(windspeed_10m_max[idx]),
        }));
        
        setWeather({ loading: false, error: null, days });
      } catch (e) {
        if (!cancelled) setWeather({ loading: false, error: 'fetch-error', days: [] });
      }
    };
    
    fetchWeather();
    return () => {
      cancelled = true;
    };
  }, [t.weatherToday, t.weatherTomorrow, t.weatherDayAfter]);

  return weather;
};
