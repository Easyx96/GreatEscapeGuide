import { Box, Typography, Button } from '@mui/material';

export const QuickAction = ({ icon, title, subtitle, href, onClick, color }) => {
  const baseStyle = {
    flex: '1 1 220px',
    textAlign: 'left',
    borderRadius: '16px',
    padding: '14px 14px',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    background: 'rgba(255,255,255,0.94)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
    textTransform: 'none',
    justifyContent: 'flex-start',
    gap: '12px',
  };
  
  const inner = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
      <Box
        sx={{
          width: 46,
          height: 46,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: color,
          color: '#fff',
          fontSize: 22,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#475569', marginTop: '2px' }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
  
  if (href) {
    return (
      <Button
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        sx={baseStyle}
      >
        {inner}
      </Button>
    );
  }
  
  return (
    <Button onClick={onClick} sx={baseStyle}>
      {inner}
    </Button>
  );
};
