import { Card, CardContent, Box, Typography, Button } from '@mui/material';

export const EmergencyCard = ({ icon, title, number, styles, t }) => (
  <Card sx={{ ...styles.card, marginBottom: '12px' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(239, 68, 68, 0.10)',
              border: '1px solid rgba(239, 68, 68, 0.18)',
              fontSize: 22,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 900, color: '#ef4444', marginTop: '2px' }}>
              {number}
            </Typography>
          </Box>
        </Box>
        <Button
          href={`tel:${number}`}
          variant="contained"
          sx={{
            background: '#ef4444',
            color: '#fff',
            fontWeight: 900,
            borderRadius: '14px',
            textTransform: 'none',
            padding: '10px 14px',
            whiteSpace: 'nowrap',
            '&:hover': { background: '#dc2626' },
          }}
          aria-label={`Call ${title} at ${number}`}
        >
          📞 {t.call}
        </Button>
      </Box>
    </CardContent>
  </Card>
);
