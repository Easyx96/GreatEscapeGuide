import { Box, Card, CardContent } from '@mui/material';
import { SectionTitle } from '../SectionTitle';
import { PlaceCard } from '../PlaceCard';

export const BeachesTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🏖️" title={t.beachesTitle} subtitle={t.beachesTitleSub} styles={styles} />
        {data.beaches.map((p) => (
          <PlaceCard key={p.name} {...p} styles={styles} t={t} />
        ))}
      </CardContent>
    </Card>
  </Box>
);
