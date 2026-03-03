import { Box, Card, CardContent } from '@mui/material';
import { SectionTitle } from '../SectionTitle';
import { PlaceCard } from '../PlaceCard';

export const EssentialsTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🛒" title={t.essentialsTitle} subtitle={t.essentialsSub} styles={styles} />
        {data.essentials.map((p) => (
          <PlaceCard key={p.name} {...p} styles={styles} t={t} />
        ))}
      </CardContent>
    </Card>
  </Box>
);
