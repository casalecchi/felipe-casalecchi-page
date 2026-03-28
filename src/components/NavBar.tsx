import { Box, Button, Container, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NavBar: FC = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: 'rgba(10, 10, 11, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        py: { xs: 0.5, sm: 1 },
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          alignItems="center" 
          direction="row" 
          justifyContent="space-between" 
          sx={{ py: 1 }}
        >
          <Box
            component={RouterLink}
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            to="/"
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1rem', sm: '1.25rem' }, // Menor no mobile
                color: 'text.primary',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Felipe Casalecchi
            </Typography>
          </Box>
          <NavBarOptions />
        </Stack>
      </Container>
    </Box>
  );
};

const NavBarOptions: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack alignItems="center" direction="row" spacing={{ xs: 1.5, sm: 3 }}>
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          minWidth: 'auto',
          px: { xs: 1, sm: 2 },
          fontSize: { xs: '0.875rem', sm: '0.875rem' },
          '&:hover': { color: 'text.primary', backgroundColor: 'transparent' },
        }}
        to="/"
      >
        {t('nav.home')}
      </Button>
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          minWidth: 'auto',
          px: { xs: 1, sm: 2 },
          fontSize: { xs: '0.875rem', sm: '0.875rem' },
          '&:hover': { color: 'text.primary', backgroundColor: 'transparent' },
        }}
        to="/privacy"
      >
        {t('nav.privacy')}
      </Button>
    </Stack>
  );
};
