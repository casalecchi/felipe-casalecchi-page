import { Box, Container, Typography } from '@mui/material';
import type { FC } from 'react';

export const About: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 3 }}>
        <Typography component="h1" gutterBottom variant="h3">
          Sobre Nós
        </Typography>
        <Typography color="text.secondary" paragraph variant="body1">
          Esta é a página sobre. Você pode adicionar mais conteúdo e páginas conforme necessário.
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Usando React Router para navegação entre páginas.
        </Typography>
      </Box>
    </Container>
  );
};
