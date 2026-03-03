import { Box, Typography, Card, CardContent } from '@mui/material';
import { SectionTitle } from './SectionTitle';

export const WeatherWidget = ({ weather, t, styles }) => {
  if (weather.loading) {
    return (
      <Box sx={{ marginTop: '8px' }}>
        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
          {t.weatherLoading}
        </Typography>
      </Box>
    );
  }
  
  if (weather.error || !weather.days.length) {
    return (
      <Box sx={{ marginTop: '8px' }}>
        <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
          {t.weatherError}
        </Typography>
      </Box>
    );
  }
  
  return (
    <Box sx={{ marginTop: '8px' }}>
      <SectionTitle icon="🌤️" title={t.weatherTitle} subtitle="Ancient Olympia area" styles={styles} />
      <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {weather.days.map((d) => (
          <Card key={d.date} sx={{ ...styles.card, flex: '1 1 130px' }}>
            <CardContent sx={{ padding: '8px !important' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a', fontSize: '0.75rem' }}>
                {d.label}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontSize: 20 }} aria-hidden="true">
                  {d.icon}
                </span>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 800, color: '#111827', fontSize: '0.8rem' }}>
                    {d.tMax}°C / {d.tMin}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', fontSize: 10 }}>
                    {t.weatherFeelsLike}: {d.feelsMax}° / {d.feelsMin}°
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ marginTop: '3px', color: '#4b5563', fontSize: 10 }}>
                {t.weatherWind}: {d.wind} km/h
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
