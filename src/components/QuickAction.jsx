import { Box, Typography, Button } from '@mui/material';

export const QuickAction = ({ icon, title, subtitle, href, onClick, color }) => {
  const baseStyle = {
    flex: '1 1 200px',
    textAlign: 'left',
    borderRadius: '12px',
    padding: '8px 10px',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    background: 'rgba(255,255,255,0.94)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
    textTransform: 'none',
    justifyContent: 'flex-start',
    gap: '8px',
  };
  
  const inner = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: color,
          color: '#fff',
          fontSize: 16,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.2, fontSize: '0.8rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#475569', marginTop: '1px', fontSize: '0.7rem' }}>
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
