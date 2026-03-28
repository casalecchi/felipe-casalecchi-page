import { Box, Button, Container, Link, Stack, Typography, Divider } from '@mui/material';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllApps } from '../data/apps';

export const Footer: FC = () => {
  const apps = getAllApps();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'pt' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: { xs: 8, md: 10 }, pb: 4, mt: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' }, 
            gap: 4,
            mb: 4
          }}
        >
          {/* Brand & Bio */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
              Felipe Casalecchi
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300, lineHeight: 1.6 }}>
              {t('footer.bio')}
            </Typography>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={toggleLanguage} 
              sx={{ 
                color: 'text.secondary', 
                borderColor: 'rgba(255,255,255,0.2)',
                borderRadius: 2,
                mt: 1,
                '&:hover': { borderColor: 'primary.main', color: 'primary.main', backgroundColor: 'transparent' }
              }}
            >
              🌐 {i18n.language.startsWith('en') ? 'Português' : 'English'}
            </Button>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
              {t('footer.navigation')}
            </Typography>
            <Stack spacing={1.5}>
              <Link component={RouterLink} to="/" color="text.secondary" underline="none" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>{t('nav.home')}</Link>
              <Link component={RouterLink} to="/privacy" color="text.secondary" underline="none" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>{t('nav.privacy')}</Link>
            </Stack>
          </Box>

          {/* Apps */}
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
              {t('footer.apps')}
            </Typography>
            <Stack spacing={1.5}>
              {apps.map((app) => (
                <Link key={app.slug} component={RouterLink} to="/" color="text.secondary" underline="none" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>
                  {t(`apps.${app.slug}.name`, app.name)}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Social */}
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
              {t('footer.contact')}
            </Typography>
            <Stack spacing={1.5}>
              <Link href="https://br.linkedin.com/in/felipe-casalecchi" target="_blank" rel="noopener noreferrer" color="text.secondary" underline="none" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>
                LinkedIn
              </Link>
              <Link href="mailto:felipevilela191@gmail.com" color="text.secondary" underline="none" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>
                E-mail
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Felipe Casalecchi. {t('footer.rights')}
          </Typography>
          <Box alt="Brotto Logo" component="img" src="/brotto_nobg.png" sx={{ width: 32, height: 32, opacity: 0.5, filter: 'grayscale(100%)' }} />
        </Box>
      </Container>
    </Box>
  );
};
