import { Box, Card, CardContent, Typography, Button } from '@mui/material';

export const ReviewPrompt = ({ t, styles }) => {
  const googleReviewUrl = 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review';
  
  return (
    <Box sx={{ marginTop: '8px' }}>
      <Card sx={styles.card}>
        <CardContent sx={{ padding: '10px !important' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'rgba(234, 179, 8, 0.12)',
                border: '1px solid rgba(234, 179, 8, 0.40)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              ⭐
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#0f172a', fontSize: '0.85rem' }}>
                {t.reviewTitle}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '2px', color: '#4b5563', fontSize: '0.75rem' }}>
                {t.reviewBody}
              </Typography>
              <Button
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  marginTop: '6px',
                  backgroundColor: '#4285F4',
                  color: '#fff',
                  fontWeight: 800,
                  borderRadius: '10px',
                  textTransform: 'none',
                  padding: '6px 10px',
                  fontSize: '0.75rem',
                  '&:hover': { backgroundColor: '#3367D6' },
                }}
              >
                ⭐ {t.reviewButton}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
