import { Chip } from '@mui/material';

export const TabChip = ({ tab, activeTab, setActiveTab }) => {
  const selected = activeTab === tab.id;
  return (
    <Chip
      label={`${tab.icon} ${tab.label}`}
      onClick={() => setActiveTab(tab.id)}
      clickable
      size="small"
      aria-pressed={selected}
      sx={{
        background: selected ? 'rgba(250, 204, 21, 0.95)' : 'rgba(255,255,255,0.14)',
        color: selected ? '#111827' : '#fff',
        border: selected ? '1px solid rgba(17,24,39,0.12)' : '1px solid rgba(255,255,255,0.20)',
        fontWeight: 900,
        fontSize: '0.75rem',
        height: '28px',
        '&:hover': {
          background: selected ? 'rgba(250, 204, 21, 1)' : 'rgba(255,255,255,0.24)',
        },
      }}
    />
  );
};
