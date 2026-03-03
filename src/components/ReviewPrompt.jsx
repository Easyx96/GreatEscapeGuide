import { Box, Card, CardContent, Typography, Button } from '@mui/material';

export const ReviewPrompt = ({ t, styles }) => {
  const googleReviewUrl = 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review';
  
  return (
    <Box sx={{ marginTop: '14px' }}>
      <Card sx={styles.card}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '14px',
                background: 'rgba(234, 179, 8, 0.12)',
                border: '1px solid rgba(234, 179, 8, 0.40)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              ⭐
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#0f172a' }}>
                {t.reviewTitle}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '4px', color: '#4b5563' }}>
                {t.reviewBody}
              </Typography>
              <Button
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  marginTop: '10px',
                  backgroundColor: '#4285F4',
                  color: '#fff',
                  fontWeight: 800,
                  borderRadius: '14px',
                  textTransform: 'none',
                  padding: '10px 14px',
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
