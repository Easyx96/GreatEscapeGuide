import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { SectionTitle } from '../SectionTitle';
import { QuickAction } from '../QuickAction';
import { WeatherWidget } from '../WeatherWidget';
import { ReviewPrompt } from '../ReviewPrompt';

export const HomeTab = ({ data, t, styles, setActiveTab, weather }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent sx={{ padding: '12px !important' }}>
        <SectionTitle icon="🌿" title={t.welcome} subtitle={t.welcomeSub} styles={styles} />
        <Box sx={styles.pillRow}>
          <Box
            sx={{
              padding: '6px 10px',
              borderRadius: '10px',
              background: 'rgba(22, 163, 74, 0.10)',
              border: '1px solid rgba(22, 163, 74, 0.18)',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 900, color: '#14532d', fontSize: '0.8rem' }}>
              🔑 {t.checkIn}: {data.property.checkin}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '6px 10px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.18)',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 900, color: '#92400e', fontSize: '0.8rem' }}>
              🚪 {t.checkOut}: {data.property.checkout}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '6px 10px',
              borderRadius: '10px',
              background: 'rgba(37, 99, 235, 0.10)',
              border: '1px solid rgba(37, 99, 235, 0.18)',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 900, color: '#1e3a8a', fontSize: '0.8rem' }}>
              📶 {t.wifiName}: {data.property.wifi.name} · {t.password}: {data.property.wifi.password}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <Button
            href={data.property.maps}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={styles.primaryBtn}
            aria-label={t.navigateToProperty}
          >
            📍 {t.navigateToProperty}
          </Button>
          <Button
            href={`https://wa.me/${data.property.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={styles.secondaryBtn}
            aria-label={t.contactHost + ' via WhatsApp'}
          >
            💬 {t.whatsapp}
          </Button>
          <Button
            href={`tel:${data.property.contact.phone}`}
            variant="outlined"
            sx={{ borderRadius: '10px', textTransform: 'none', fontWeight: 800, padding: '6px 10px' }}
            aria-label={t.contactHost + ' via call'}
          >
            📞 {t.call}
          </Button>
        </Box>

        <Box sx={{ marginTop: '10px' }}>
          <Typography
            variant="subtitle2"
            sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', fontWeight: 800, fontSize: '0.7rem' }}
          >
            {t.quickShortcuts}
          </Typography>
          <Box sx={{ marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <QuickAction
              icon="📍"
              title={t.navigate}
              subtitle={t.navigateSub}
              href={data.property.maps}
              color="#0ea5e9"
            />
            <QuickAction
              icon="📶"
              title={t.wifi}
              subtitle={t.wifiSub}
              onClick={() => setActiveTab('house')}
              color="#6366f1"
            />
            <QuickAction
              icon="🏖️"
              title={t.beaches}
              subtitle={t.beachesSub}
              onClick={() => setActiveTab('beaches')}
              color="#22c55e"
            />
            <QuickAction
              icon="🍽️"
              title={t.foodDrinks}
              subtitle={t.foodDrinksSub}
              onClick={() => setActiveTab('dining')}
              color="#f97316"
            />
          </Box>
        </Box>

        <Box sx={{ marginTop: '8px' }}>
          <Typography variant="body2" sx={{ color: '#6b7280', fontStyle: 'italic', fontSize: '0.75rem' }}>
            {t.tipSave}
          </Typography>
        </Box>

        <WeatherWidget weather={weather} t={t} styles={styles} />
        <ReviewPrompt t={t} styles={styles} />
      </CardContent>
    </Card>
  </Box>
);
