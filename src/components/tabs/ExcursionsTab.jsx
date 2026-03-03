import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { SectionTitle } from '../SectionTitle';

export const ExcursionsTab = ({ data, t, styles }) => (
  <Box sx={styles.shell}>
    <Card sx={styles.card}>
      <CardContent>
        <SectionTitle icon="🗺️" title={t.excursionsTitle} subtitle={t.excursionsTitleSub} styles={styles} />
        {data.excursions.map((e) => (
          <Card key={e.name} sx={{ ...styles.card, marginBottom: '14px' }}>
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
                    background: 'rgba(37, 99, 235, 0.10)',
                    border: '1px solid rgba(37, 99, 235, 0.18)',
                    flexShrink: 0,
                    fontSize: 22,
                  }}
                  aria-hidden="true"
                >
                  {e.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
                    {e.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', marginTop: '4px' }}>
                    {e.type}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', marginTop: '6px' }}>
                    {e.detail}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#0f172a', marginTop: '8px', fontWeight: 800 }}>
                    🚗 {e.drive}
                  </Typography>
                  {e.tips && e.tips.length ? (
                    <Box sx={{ marginTop: '10px' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                        💡 {t.whatToTake}
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#4b5563' }}>
                        {e.tips.map((tip) => (
                          <li key={tip}>
                            <Typography variant="body2">{tip}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  ) : null}
                  <Box sx={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <Button
                      href={e.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={styles.secondaryBtn}
                    >
                      📍 {t.navigate}
                    </Button>
                    {e.website ? (
                      <Button
                        href={e.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{ borderRadius: '14px', textTransform: 'none', fontWeight: 800, padding: '10px 14px' }}
                      >
                        🌐 {t.website}
                      </Button>
                    ) : null}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
        <Typography variant="body2" sx={{ marginTop: '10px', color: '#6b7280', fontStyle: 'italic' }}>
          {t.tipExcursions}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
