import { Box, Card, CardContent, Typography } from '@mui/material';
import { SectionTitle } from '../SectionTitle';
import { EmergencyCard } from '../EmergencyCard';

export const EmergencyTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🆘" title={t.emergencyTitle} subtitle={t.emergencySub} styles={styles} />
        {data.emergency.map((em) => (
          <EmergencyCard key={em.number} {...em} styles={styles} t={t} />
        ))}
        <Typography variant="body2" sx={{ marginTop: '12px', color: '#b91c1c', fontWeight: 800 }}>
          {t.tipEmergency} <strong>112</strong> {t.first}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
