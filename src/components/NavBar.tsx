import { Box, Button, Stack } from '@mui/material';
import type { FC } from 'react';

export const NavBar: FC = () => {
  return (
    <Stack alignItems="center" direction="row" justifyContent="space-between">
      <Box
        alt="Brotto Logo"
        component="img"
        src="/brotto_nobg.png"
        sx={{ width: 64, height: 63, objectFit: 'contain' }}
      />
      <NavBarOptions />
    </Stack>
  );
};

const NavBarOptions: FC = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={4}>
      <Button>About</Button>
      <Button>Contact</Button>
      <Button sx={{ borderRadius: '2rem' }} variant="contained">
        Download Brotto
      </Button>
    </Stack>
  );
};
