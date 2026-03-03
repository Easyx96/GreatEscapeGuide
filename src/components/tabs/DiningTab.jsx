import { Box, Card, CardContent } from '@mui/material';
import { SectionTitle } from '../SectionTitle';
import { PlaceCard } from '../PlaceCard';

export const DiningTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🍽️" title={t.diningTitle} subtitle={t.diningSub} styles={styles} />
        {data.dining.map((p) => (
          <PlaceCard key={p.name} {...p} styles={styles} t={t} />
        ))}
      </CardContent>
    </Card>
  </Box>
);
