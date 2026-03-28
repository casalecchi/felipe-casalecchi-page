import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 20, textAlign: 'center' }}>
      <Typography gutterBottom variant="h2">
        Página não encontrada
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }} variant="body1">
        Parece que a rota não existe ou foi movida. Vamos voltar ao portal principal.
      </Typography>
      <Box>
        <Button color="primary" onClick={() => navigate('/')} variant="contained">
          Voltar para o portal
        </Button>
      </Box>
    </Container>
  );
};
