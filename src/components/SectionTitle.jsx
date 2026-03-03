import { Box, Typography, Divider } from '@mui/material';

export const SectionTitle = ({ icon, title, subtitle, styles }) => (
  <Box sx={{ marginBottom: '6px' }}>
    <Box sx={styles.sectionTitleWrap}>
      <Typography variant="h6" component="span" sx={{ fontWeight: 900, color: '#0f172a', fontSize: '1rem' }}>
        {icon}
      </Typography>
      <Box>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 900, color: '#0f172a', fontSize: '0.95rem' }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="body2" sx={{ color: '#475569', marginTop: '1px', fontSize: '0.7rem' }}>
            {subtitle}
          </Typography>
        ) : null}
      </Box>
    </Box>
    <Divider />
  </Box>
);
