import { Box, Container, Typography } from '@mui/material';
import type { FC } from 'react';

export const Home: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box
        sx={{
          textAlign: 'center',
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" gutterBottom variant="h3">
          Bem-vindo ao nosso App
        </Typography>
        <Typography color="text.secondary" variant="body1">
          Página inicial com tema personalizado em bege, terracota e verde claro.
        </Typography>
      </Box>
    </Container>
  );
};
