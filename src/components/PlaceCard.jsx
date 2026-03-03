import { Card, CardContent, Box, Typography, Button } from '@mui/material';

export const PlaceCard = ({ icon, name, type, detail, drive, maps, styles, t }) => (
  <Card sx={{ ...styles.card, marginBottom: '14px' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(22, 163, 74, 0.10)',
            border: '1px solid rgba(22, 163, 74, 0.18)',
            flexShrink: 0,
            fontSize: 22,
          }}
          aria-hidden="true"
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#475569', marginTop: '4px' }}>
            {type}
          </Typography>
          {detail ? (
            <Typography variant="body2" sx={{ color: '#334155', marginTop: '6px' }}>
              {detail}
            </Typography>
          ) : null}
          {drive ? (
            <Typography variant="body2" sx={{ color: '#0f172a', marginTop: '8px', fontWeight: 800 }}>
              🚗 {drive}
            </Typography>
          ) : null}
          <Box sx={{ marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={styles.secondaryBtn}
              aria-label={`Navigate to ${name}`}
            >
              📍 {t.navigate}
            </Button>
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);
