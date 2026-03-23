import { Box, Container, Typography } from '@mui/material';
import type { FC } from 'react';

export const Contact: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 3 }}>
        <Typography component="h1" gutterBottom variant="h3">
          Entre em Contato
        </Typography>
        <Typography color="text.secondary" paragraph variant="body1">
          Você pode adicionar um formulário de contato ou informações aqui.
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Email: contato@exemplo.com
        </Typography>
      </Box>
    </Container>
  );
};
