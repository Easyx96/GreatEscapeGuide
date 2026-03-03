import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { SectionTitle } from '../SectionTitle';

export const HouseTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🔑" title={t.houseInfo} subtitle={t.houseInfoSub} styles={styles} />
        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
          📶 WiFi
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '4px' }}>
          {t.wifiName}: <strong>{data.property.wifi.name}</strong>
          <br />
          {t.password}: <strong>{data.property.wifi.password}</strong>
        </Typography>
        <Box sx={{ marginTop: '10px' }}>
          <Button
            href={`WIFI:T:WPA;S:${encodeURIComponent(data.property.wifi.name)};P:${encodeURIComponent(
              data.property.wifi.password
            )};;`}
            variant="contained"
            sx={styles.primaryBtn}
          >
            📶 {t.quickConnectWifi}
          </Button>
        </Box>

        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, marginBottom: '6px' }}>
            🧹 House notes
          </Typography>
          <Typography variant="body2" sx={{ color: '#4b5563' }}>
            Quiet hours, trash instructions, parking etc. You can extend this text with your house rules.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>
);
