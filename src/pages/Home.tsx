import { Box, Container, Typography, Fade } from '@mui/material';
import { getAllApps } from '../data/apps';
import { AppCard } from '../components/AppCard';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const apps = getAllApps();
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at top, rgba(242, 169, 0, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="md">
          <Fade in={true} timeout={800}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                component="h1" 
                variant="h1" 
                gutterBottom
                sx={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                Felipe Casalecchi
              </Typography>
              <Typography 
                variant="h4" 
                color="primary" 
                sx={{ mb: 4, fontWeight: 600, letterSpacing: '-0.01em' }}
              >
                {t('home.role')}
              </Typography>
              <Typography 
                color="text.secondary" 
                variant="h6" 
                sx={{ 
                  maxWidth: 680, 
                  mx: 'auto', 
                  mb: 5,
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {t('home.bio')}
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Apps Showcase Section */}
      <Box sx={{ flexGrow: 1, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md">
          {/* Cabeçalho de Estol de Seção da AppStore (ex: "Publicados" / Top Apps) */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              mb: 4, 
              pb: 2, 
              borderBottom: '1px solid rgba(255,255,255,0.08)' 
            }}
          >
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                letterSpacing: '-0.02em',
                color: 'text.primary'
              }}
            >
              {t('home.appsTitle')}
            </Typography>
          </Box>

          {/* Grid alterado para no máximo 2 colunas para garantir que a largura do AppCard brilhe sem cortes */}
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
              gap: { xs: 4, md: 6 } 
            }}
          >
            {apps.map((app) => (
              <Box key={app.slug}>
                <AppCard app={app} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
