import { Box, Button, Container, Stack } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const NavBar: FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ py: 2 }}>
        <Box
          alt="Brotto Logo"
          component="img"
          src="/brotto_nobg.png"
          sx={{ width: 64, height: 63, objectFit: 'contain' }}
        />
        <NavBarOptions />
      </Stack>
    </Container>
  );
};

const NavBarOptions: FC = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={4}>
      <Button component={Link} to="/">
        Home
      </Button>
      <Button component={Link} to="/about">
        About
      </Button>
      <Button component={Link} to="/contact">
        Contact
      </Button>
      <Button sx={{ borderRadius: '2rem' }} variant="contained">
        Download Brotto
      </Button>
    </Stack>
  );
};
