import { Box, Typography, Divider } from '@mui/material';

export const SectionTitle = ({ icon, title, subtitle, styles }) => (
  <Box sx={{ marginBottom: '12px' }}>
    <Box sx={styles.sectionTitleWrap}>
      <Typography variant="h5" component="span" sx={{ fontWeight: 900, color: '#0f172a' }}>
        {icon}
      </Typography>
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 900, color: '#0f172a' }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="body2" sx={{ color: '#475569', marginTop: '2px' }}>
            {subtitle}
          </Typography>
        ) : null}
      </Box>
    </Box>
    <Divider />
  </Box>
);
