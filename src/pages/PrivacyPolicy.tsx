import { Box, Button, Container, Typography, Divider } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy: FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'pt' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography component="h1" gutterBottom variant="h3" sx={{ fontWeight: 800 }}>
          {t('privacy.title')}
        </Typography>
        <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 2 }}>
          {t('privacy.date')}
        </Typography>
        
        <Button 
          variant="outlined" 
          size="small" 
          onClick={toggleLanguage} 
          sx={{ 
            color: 'text.secondary', 
            borderColor: 'rgba(255,255,255,0.2)',
            borderRadius: 2,
            '&:hover': { borderColor: 'primary.main', color: 'primary.main', backgroundColor: 'transparent' }
          }}
        >
          🌐 {i18n.language.startsWith('en') ? 'Português' : 'English'}
        </Button>
      </Box>

      <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.intro') }} />

      <Box sx={{ my: 4 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section1Title')}
        </Typography>
        <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.section1Intro') }} />
        <ul>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s1p1') }} />
          </li>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s1p2') }} />
          </li>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s1p3') }} />
          </li>
        </ul>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ my: 4 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section2Title')}
        </Typography>
        <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.s2p1') }} />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ my: 4 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section3Title')}
        </Typography>
        <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.section3Intro') }} />
        <ul>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s3p1') }} />
          </li>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s3p2') }} />
          </li>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s3p3') }} />
          </li>
        </ul>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ my: 4 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section4Title')}
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s4p1') }} />
          </li>
          <li>
            <Typography variant="body1" sx={{ mb: 1 }} dangerouslySetInnerHTML={{ __html: t('privacy.s4p2') }} />
          </li>
        </ul>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ my: 4 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section5Title')}
        </Typography>
        <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.s5p1') }} />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography gutterBottom variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
          {t('privacy.section6Title')}
        </Typography>
        <Typography paragraph variant="body1" dangerouslySetInnerHTML={{ __html: t('privacy.s6p1') }} />
        <Typography variant="h6" color="text.primary" sx={{ mt: 2, fontWeight: 700 }}>
          <a href="mailto:brotto.app@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>brotto.app@gmail.com</a>
        </Typography>
      </Box>
    </Container>
  );
};
