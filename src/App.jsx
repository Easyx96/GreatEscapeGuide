import { useState, useMemo } from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { translations } from './data/translations';
import { propertyData } from './data/propertyData';
import { getStyles } from './styles';
import { useResponsive } from './hooks/useResponsive';
import { useWeather } from './hooks/useWeather';

import { TabChip } from './components/TabChip';
import { HomeTab } from './components/tabs/HomeTab';
import { HouseTab } from './components/tabs/HouseTab';
import { DiningTab } from './components/tabs/DiningTab';
import { BeachesTab } from './components/tabs/BeachesTab';
import { EssentialsTab } from './components/tabs/EssentialsTab';
import { ExcursionsTab } from './components/tabs/ExcursionsTab';
import { EmergencyTab } from './components/tabs/EmergencyTab';

const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('en');

  const { isMobile, headerVisible, showBackToTop, scrollToTop } = useResponsive();
  const t = translations[language];
  const weather = useWeather(t);
  const styles = getStyles(isMobile, headerVisible);

  const tabs = useMemo(
    () => [
      { id: 'home', label: t.home, icon: '🏠' },
      { id: 'house', label: t.house, icon: '🔑' },
      { id: 'dining', label: t.dining, icon: '🍽️' },
      { id: 'beaches', label: t.beaches, icon: '🏖️' },
      { id: 'essentials', label: t.essentials, icon: '🛒' },
      { id: 'excursions', label: t.excursions, icon: '🗺️' },
      { id: 'emergency', label: t.emergency, icon: '🆘' },
    ],
    [t]
  );

  const renderContent = () => {
    const props = { data: propertyData, t, styles, setActiveTab, weather };
    switch (activeTab) {
      case 'home':
        return <HomeTab {...props} />;
      case 'house':
        return <HouseTab {...props} />;
      case 'dining':
        return <DiningTab {...props} />;
      case 'beaches':
        return <BeachesTab {...props} />;
      case 'essentials':
        return <EssentialsTab {...props} />;
      case 'excursions':
        return <ExcursionsTab {...props} />;
      case 'emergency':
        return <EmergencyTab {...props} />;
      default:
        return <HomeTab {...props} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.bg}>
        <Box sx={styles.overlay}>
          <Container maxWidth="sm" sx={{ padding: '0 12px' }}>
            <Paper elevation={0} sx={styles.header}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <Box>
                  <Typography variant="h5" component="h1" sx={styles.headerTitle}>
                    🏛️ {t.headerTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: '4px', opacity: 0.85 }}>
                    Ancient Olympia · Greece
                  </Typography>
                </Box>
                <Box>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    aria-label="Language"
                    style={{
                      borderRadius: 999,
                      padding: '6px 10px',
                      border: '1px solid rgba(209, 213, 219, 1)',
                      background: 'rgba(255,255,255,0.96)',
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="fr">FR</option>
                    <option value="el">EL</option>
                  </select>
                </Box>
              </Box>

              <Box sx={styles.topNav} aria-label="Main navigation">
                {tabs.map((tab) => (
                  <TabChip key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
                ))}
              </Box>
            </Paper>

            {renderContent()}
            
            <Box sx={{ marginTop: '18px', textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#6b7280', fontStyle: 'italic' }}>
                {t.enjoyStay}
              </Typography>
            </Box>
          </Container>
        </Box>

        <button
          className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>

        {isMobile && (
          <Box className="no-print" sx={styles.bottomNav}>
            <Box sx={styles.bottomNavInner} aria-label="Bottom navigation">
              {tabs.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    sx={{
                      ...styles.bottomNavBtn,
                      background: selected ? 'rgba(22, 163, 74, 0.10)' : 'transparent',
                      color: selected ? '#065f46' : '#111827',
                    }}
                  >
                    <span style={{ fontSize: 18 }} aria-hidden="true">
                      {tab.icon}
                    </span>
                    <span style={{ fontSize: 11 }}>{tab.label}</span>
                  </Button>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
